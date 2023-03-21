# Desafio: Consulta Processual (JusBrasil)

## Ferramentas, Framework e Linguagens que usei no backend: 
- NodeJS;
- ExpressJS;
- Sequelize (ORM);
- Postgres;
- Jest (Unit test);
- Docker;


## Como executar a aplicação:

`git clone https://github.com/joaovfraga/ConsultaProcessualJusBrasil_backend` <br>
`npm install` <br>
`npx sequelize-cli db:migrate` <br>
`npx sequelize-cli db:seed:all` <br>
`npm start —port=3300` <br>

## Docker:

⚠️ importante: Assim que for feito git clone do rep de backend, por favor, criar uma pasta dentro das pasta backend chamada “pgdb” e dentro da pasta “pgdb” criar uma pasta “pgdata”.

O pgadm onde você pode ver a interface do PostgreSQL está na porta 5050. E o pgdb está na porta 5432.

Crendenciais para acessar o postgres adm: <br>
`Usuário: admin@admin.com` <br>
`Senha: postgres` <br>

O host é `pgdb` e a senha é `postgres.` 

Um nivel acima onde tem o docker-.yml 
rode `docker-compose up -d --build` 

## Por fim:
O backend está na porta http://localhost:3300
