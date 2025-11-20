# 📌 CRUD em TypeScript --- FIAP Pós-Tech

Este projeto é um **CRUD completo desenvolvido em TypeScript**,
utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**
(via Docker).\
Ele foi criado como parte do **Módulo 1 do curso Pós-Tech FIAP**.

## 🚀 Tecnologias Utilizadas

-   **Node.js**
-   **TypeScript**
-   **Express**
-   **Prisma ORM**
-   **PostgreSQL (Docker)**
-   **dotenv**
-   **Nodemon**
-   **ts-node-dev**

## 📁 Estrutura do Projeto

    .
    ├── prisma/
    │   ├── schema.prisma
    │   └── migrations/
    ├── src/
    │   ├── server.ts
    │   ├── routes/
    │   ├── controllers/
    │   └── services/
    ├── .env
    ├── docker-compose.yml
    ├── package.json
    └── tsconfig.json

## 🐳 Subindo o Banco com Docker

Certifique-se de ter **Docker** instalado.

### 1. Suba o container:

``` sh
docker compose up -d
```

### 2. Verifique se o container está rodando:

``` sh
docker ps
```

Seu PostgreSQL estará disponível em:

-   **Host:** localhost\
-   **Porta:** 5433\
-   **Usuário:** postgres\
-   **Senha:** postgres\
-   **Banco:** meubanco

## ⚙️ Configuração do Prisma

### Rodar migrações:

``` sh
npx prisma migrate dev
```

### Abrir o Prisma Studio:

``` sh
npx prisma studio
```

## ▶️ Executando o Projeto

### Modo desenvolvimento:

``` sh
npm run dev
```

### Modo produção:

``` sh
npm run build
npm start
```

## 🔗 Variáveis de Ambiente (`.env`)

Crie um arquivo `.env` na raiz:

    DATABASE_URL="postgresql://postgres:postgres@localhost:5433/meubanco"
    PORT=3000

## 🧪 Endpoints da API

Exemplo:

  Método   Rota           Descrição
  -------- -------------- ----------------------
  GET      `/items`       Lista todos os itens
  GET      `/items/:id`   Obtém item por ID
  POST     `/items`       Cria um novo item
  PUT      `/items/:id`   Atualiza um item
  DELETE   `/items/:id`   Remove um item

## 📚 Scripts importantes

``` json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "prisma:migrate": "npx prisma migrate dev",
    "prisma:studio": "npx prisma studio"
  }
}
```

## 📝 Como Contribuir

1.  Faça um fork do projeto\
2.  Crie uma branch nova\
3.  Commit suas alterações\
4.  Abra um Pull Request

## 👤 Autor

**João**\
🔗 GitHub: https://github.com/jpshimidt
