# Backend NestJs Model

Modelo base para iniciar novos projetos backend NodeJs usando o NestJs Framework

## 🚀 Começando

Após clonar o projeto, abra-o em seu terminal (clique direito + abrir com terminal / Git Bash Here)

### 📋 Pré-requisitos

O que é necessário ter na máquina para rodar o projeto

```
NodeJs 16 ou superior
Git
Visual Studio Code

```

### 🔧 Instalação

Instale as dependências do projeto:

```
npm install
```

Abra o projeto no VScode manualmente, ou pelo terminal executando:

```
code .
```

Abra o arquivo .env e defina a string de conexão do banco de dados:
```
ex: mysql://host=host,port;database=database;user=user;pwd=pwd/schema=database
```

Execute o comando prisma que tras todas as tabelas do seu db
```
npx prisma db pull
```

E execute o comando que gera o client prisma com base nos schemas gerados.
```
npx prisma generate
```

### 🖌 Estilo de código

Neste projeto o eslint junto do prettier fornecem um conjunto de regras
para forçar um estilo de código específico.
Para resolver rapidamente problemas relacionados, execute no vscode:

```
ctrl + shift + P
```
Digite Eslint, e escolha a opção: "Fix all auto-fixable Problems"

## 🛠️ Construído com

* [NestJs](https://docs.nestjs.com/) - O framework nodejs usado
* [Typescript](https://www.typescriptlang.org/docs/) - Superset para linguagem Js

## ✒️ Autores

* **Eduardo Bertozi** - *Desenvolvimento e Documentação* - [Eduardo Bertozi](https://github.com/eduardobertozi)