# Desafio: Consulta Processual (JusBrasil)

## Ferramentas, Framework e Linguagens que usei no backend: 
- NodeJS
- ExpressJS;
- Sequelize (ORM);
- Postgres;
- Jest (Unit test);
- Docker


## Como executar a aplicação

`git clone https://github.com/joaovfraga/ConsultaProcessualJusBrasil_backend` <br>
`npm install` <br>
`npx sequelize-cli db:migrate` <br>
`npx sequelize-cli db:seed:all` <br>
`npm start` <br>

Um nivel acima onde tem o docker-.yml 
rode `docker-compose up -d --build` 

Visite: http://localhost:3000
