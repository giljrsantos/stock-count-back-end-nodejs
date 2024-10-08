# Back End Sistema Contagem Estoque

API Rest desenvolvida em NodeJs versão `v18.16.0`. API desenvolvida para consumir informações de banco de dados MySql.

A funcionalidade dessa API é um `CRUD` com os métodos `GET, POST, PATCH, PUT e DELETE`.


```json
"dependencies": {
    "@types/jest": "^29.5.13",
    "express": "^4.19.2",
    "http-status-code": "^2.1.0",
    "yup": "^1.0.2",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
},
"devDependencies": {
    "@types/express": "^4.17.21",
    "nodemon": "^3.1.4",
    "dotenv": "^16.4.5",
    "ts-node-dev": "^2.0.0",
    "prettier": "^3.3.3",
    "typescript": "^5.5.4",
    "@types/supertest": "^6.0.2",
    "supertest": "^7.0.0",
}
```

```json
"Node": 18.16.0
"Package Manager": npm 9.5.1
```

Configuração da lib `prettier` para ajudar a padronização da formatação do código.
    
    Primeiro Passo: npm i --save-dev prettier ou yarn add -D prettier.

Após a instalação criei o arquivo `.prettierrc` na raiz do projeto. No mesmo nível do arquivo package.json, para indicicar alguns padrões de formatação como quantidade máxima de caracteres em uma linha, tamanho da tabulação, entre outros.

`.prettierrc`
```json
{
  "bracketSameLine": false, // `false` - Indica que os colchetes de objetos não devem estar na mesma linha que o nome da propriedade.
  "bracketSpacing": true, // true - Insere espaços entre colchetes.
  "printWidth": 60, // 60 - Define a largura máxima de uma linha de código em caracteres. Se uma linha exceder esse limite, o Prettier tentará quebrar a linha adequadamente.
  "singleQuote": true, // true - Usa aspas simples (') em vez de aspas duplas (") para strings.
  "tabWidth": 2, // 2 - Define o tamanho de uma tabulação em espaços.
  "useTabs": false // false - Usa espaços em vez de tabulações para indentação.
}
```

Depois de fazer todo o processo de configuração,  podemos criar um script dentro do package.json para formatar todos os arquivos desejados. Criei o script `format` para executar esta tarefa:

E no terminal você deve chamar `npm run format`

```json
  "scripts": {
    "start": "nodemon src/index.ts",
    "format": "npx prettier --write \"src/**/*.ts\" \"test/**/*.ts\""
  },
```

# Endpoints
### Rede(privado)
- GET /redes Busca uma lista de rede, com paginação e filtro por nome, filtro por id
- POST /redes Criar uma nova Rede
- GET /redes/:id Busca apenas uma rede pelo seu id
- PUT /redes/:id Atualiza uma rede pelo seu id
- DELETE /redes/:id Apaga a cidade pelo seu id




<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>