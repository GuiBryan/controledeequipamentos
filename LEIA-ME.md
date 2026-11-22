# Controle de Equipamentos — EPI/EPC

App instalável para controle de equipamentos sensíveis (multigás, cinto, rádio, capacete).
Checklist por **tipo**, retirada, devolução com foto e painel do balcão.

## Arquivos para o repositório

Suba todos na **raiz** do repositório:

```
index.html      <- a página do app
manifest.json
sw.js
icons/
  icon-192.png
  icon-512.png
  icon-maskable-512.png
  apple-touch-icon.png
  favicon-32.png
  favicon.ico
```

A pasta `icons/` precisa existir com esse nome.

## Primeiro uso (obrigatório nesta ordem)

1. Aba **Pessoas** → cadastre **você** como **atendente**
2. Clique em **👤 Entrar** e informe seu e-mail — sem isso o app não libera cadastro
3. Aba **Tipos e Checklists** → cadastre o primeiro tipo e os itens dele
4. Aba **Equipamentos** → cadastre a tag física (o checklist vem do tipo)
5. Aba **Retirar** → registre a primeira retirada

## Como instalar no aparelho

- **Computador (Chrome/Edge):** ícone de instalar na barra de endereço
- **Android:** menu ⋮ → "Instalar aplicativo"
- **iPhone:** Safari → Compartilhar → "Adicionar à Tela de Início"

## Onde os dados ficam

No próprio aparelho, em IndexedDB. Nada vai para servidor.
**Faça backup** (botão no topo) antes de trocar de celular ou limpar o navegador.
O arquivo é JSON e é o mesmo que servirá de carga para o Power Apps.

## Limite honesto

A identificação é por e-mail, conferido contra a lista de Pessoas. É uma **trava de
conveniência**, não prova de identidade: não substitui o login corporativo.
Para evidência formal de segurança, o caminho é Power Apps com M365.

## Funciona offline

O app abre sem internet e mostra o que já está guardado. Gravar também funciona offline.
