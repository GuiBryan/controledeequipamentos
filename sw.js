/* Service Worker — Controle de Equipamentos */
const VERSAO = 'equip-v3';
const CASCO = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];
self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(VERSAO)
      .then(c=>Promise.all(CASCO.map(u=>c.add(u).catch(()=>null))))
      .then(()=>self.skipWaiting())
  );
});
self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys()
      .then(k=>Promise.all(k.filter(x=>x!==VERSAO).map(x=>caches.delete(x))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch', e=>{
  const r = e.request;
  if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(u.origin !== self.location.origin) return;
  if(r.mode === 'navigate' || u.pathname === '/' || u.pathname.endsWith('index.html')){
    e.respondWith(
      fetch(r).then(resp=>{
        const cp = resp.clone();
        caches.open(VERSAO).then(c=>c.put(r,cp)).catch(()=>{});
        return resp;
      }).catch(()=> caches.match(r).then(x=> x || caches.match('./index.html')))
    );
    return;
  }
  e.respondWith(
    caches.match(r).then(x=>{
      if(x) return x;
      return fetch(r).then(resp=>{
        if(resp && resp.status===200){
          const cp = resp.clone();
          caches.open(VERSAO).then(c=>c.put(r,cp)).catch(()=>{});
        }
        return resp;
      }).catch(()=>x);
    })
  );
});
