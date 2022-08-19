# Delivery App

Delivery App é um website de delivery de bebidas, onde o cliente pode procurar por bebidas, realizar um pedido e acompanhar o seu estado. Além disso, o site também conta com uma interface para os vendedores, onde podem visualizar os pedidos pelos quais são responsáveis e atualizar seus estados até que a entrega seja feita.

Este projeto foi desenvolvido juntamente com [Lucas Duarte](https://github.com/lucsduartee), [Wellington Calixto](https://github.com/Calixto-Wellington), [Anastacio Neto](https://github.com/anastacioneto), [Dinei Nunes](https://github.com/dineinunes) e [Marcos Caravalho](https://github.com/ItsMarcosC), utilizando as metodologias ágeis Scrum e Kanban. Dentro do projeto, fui responsável pelo desenvolvimento do Back-end, que realizei em pair programming com Wellington Calixto e Dinei Nunes.

## Tecnologias utilizadas

O Front-End foi desenvolvido utilizando [React](https://reactjs.org/) com [React Hooks](https://reactjs.org/docs/hooks-intro.html), [React Router](https://reactrouter.com/), [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) para guardar os itens do carrinho de compras e o token de autenticação do usuário, [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) para consumir a API do back-end e [Context API](https://reactjs.org/docs/context.html) para armazenar o estado da aplicação.

O Back-End foi desenvolvido utilizando [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MySQL](https://www.mysql.com/) através da ORM [Sequelize](https://sequelize.org/), [JSON Web Tokens (JWT)](https://jwt.io/) na autenticação dos usuários e hash [MD5](https://en.wikipedia.org/wiki/MD5) nas suas senhas. Além disso, a aplicação foi conteinerizada usando [Docker](https://www.docker.com/).

## Dependências

Você precisará do [Git](https://git-scm.com/downloads) e das tecnologias de conteinerização [Docker](https://docs.docker.com/engine/install/) e [Docker Compose](https://docs.docker.com/compose/install/) instalados em sua máquina para executar a aplicação.

## Como executar a aplicação

1. No terminal, clone o repositório:
```sh
git clone https://github.com/nataelienai/delivery-app.git
```

2. Entre na pasta do repositório clonado:
```sh
cd delivery-app
```

3. Inicialize a aplicação com Docker Compose:
```sh
docker compose up
```

- Na primeira execução, a inicialização da aplicação pode levar alguns minutos. Aguarde até que apareça a mensagem:

```
app_frontend  | Compiled successfully!
app_frontend  | 
app_frontend  | You can now view delivery-app-front-end in the browser.
app_frontend  | 
app_frontend  |   Local:            http://localhost:3000
...
```

4. Após a inicialização, acesse o endereço `http://localhost:3000` pelo seu navegador para abrir a aplicação.

- Para encerrar, pressione as teclas `ctrl + C` no terminal.

Acesse a [documentação da linha de comando do Docker Compose](https://docs.docker.com/engine/reference/commandline/compose/#child-commands) para saber mais sobre outros comandos disponíveis.

---
