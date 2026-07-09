# Blog de RPG - Chronicles of Darkness

Este projeto é um blog de ficção que pertence a um personagem de uma mesa de RPG. O conteúdo é apresentado como se fosse o diário ou as anotações desse personagem dentro do universo de *Chronicles of Darkness*.

## Sobre

- Tipo: blog estático em HTML/CSS/JavaScript
- Tema: RPG e narrativa de personagem
- Objetivo: servir como blog pessoal de um personagem de mesa de RPG
- Disponível online em: https://hugocastaldelli.github.io/blog-rpg-chronicle-of-darkness/

## Como rodar localmente

1. Abra a pasta do projeto no VS Code ou no seu editor de preferência.
2. Abra o arquivo `index.html` no navegador.
3. Se preferir, use uma extensão de servidor local como Live Server do VS Code para servir o site.

> Dica: no VS Code, instale a extensão Live Server e clique em "Go Live" para visualizar o blog automaticamente.

## Como adicionar novos posts

1. Abra o arquivo `posts.js` ou o arquivo responsável pela lista de posts no projeto.
2. Adicione um novo objeto de post seguindo o formato existente.
3. Salve o arquivo e recarregue o navegador.

### Exemplo

```js
{
  id: 3,
  title: "Novo post do personagem",
  date: "2026-07-09",
  excerpt: "Uma nova entrada nas memórias do personagem...",
  content: "Conteúdo do post aqui"
}
```

4. Opcionalmente, crie um novo arquivo na pasta `content/` se o projeto estiver usando arquivos separados para o conteúdo dos posts.
5. Atualize `posts.js` para referenciar o novo arquivo, caso seja necessário.

## Observações

- O blog usa arquivos estáticos e não requer backend.
- Qualquer mudança em CSS, JavaScript ou conteúdo será refletida ao atualizar a página.
- Para publicar no GitHub Pages, basta enviar os arquivos para o repositório conectado ao site.
