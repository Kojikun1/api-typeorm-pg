<h1 align="center">
    Tools
</h1>

# Índice

- [Descrição](#-descrição-do-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-como-baixar-o-projeto)

---

## 🖋 Descrição do projeto

API para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

---

## 🚀 Tecnologias utilizadas

o projeto foi desenvolvido usando as seguintes tecnologias:

- [Node.js](https://nodejs.org/pt-br/docs/)
- [Express.js](http://expressjs.com/pt-br/)
- [TypeORM](typeorm.io)
- PostgreSQL
- UUID

---

## 💾 Como Ultilizar o projeto

### Primeiro instale : 
- [Git](https://git-scm.com/) 
- [Node.jS](https://nodejs.org/pt-br/download/) + [npm](https://www.npmjs.com/get-npm)
- [PostgreSQL](https://www.postgresql.org/download/)

### Crie um Banco de dados de Teste PostgreSQL

```bash
# Clonar o repositório
git clone https://github.com/Kojikun1/api-typeorm-pg.git

# Entrar no diretório
cd api-typeorm-pg

# Instalar as dependências
npm install

# Criando Tabela com migrations
npm run typeorm migration:run

# Rodar o projeto
npm run dev

```

- Crie um arquivo ormconfig.json na pasta raíz do projeto com as suas informações do banco de dados :

```json
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "password",
    "database": "db_teste",
    "logging": false,
    "entities": [
       "src/models/*.ts"
    ],
    "migrations": [
       "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
 }
```

---

Desenvolvido por Bruno Frank Barbosa Duarte
