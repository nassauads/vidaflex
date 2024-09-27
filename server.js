// server.js
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const routes = require('./routes/routes'); // Importando as rotas corretamente

const app = express();
const port = 3000;

// Configuração do middleware para lidar com dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração para servir arquivos estáticos da pasta public
app.use(express.static('public')); // Adiciona essa linha para servir os arquivos da pasta public

// Configuração da sessão
app.use(
  session({
    secret: 'atdusrbm2a420', // Troque por uma string mais segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Altere para true em produção (HTTPS)
  })
);

// Uso das rotas importadas
app.use('/', routes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});