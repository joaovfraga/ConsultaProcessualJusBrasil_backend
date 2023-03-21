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
`npm start` <br>

## Docker:

Fiz um docker pra facilitar o build do projeto porque o banco está dentro do docker, usando o postgres. O pgdb padrão está na porta `5432`, porém na hora  acessar tem que mudar pra `5050`.

Crendenciais para acessar o postgres adm: <br>
`Usuário: admin@admin.com` <br>
`Senha: postgres` <br>

O host é `pgdb` e a senha é `postgres.` 

Um nivel acima onde tem o docker-.yml 
rode `docker-compose up -d --build` 

Visite: http://localhost:3000
