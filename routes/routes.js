// routes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db'); // Corrija o caminho para a configuração do banco de dados
const verificaAutenticacao = require('../middlewares/authMiddleware'); // Corrija o caminho para o middleware

const router = express.Router(); // Certifique-se de que o router está sendo usado corretamente

// Rota de cadastro de usuário
router.post('/register', async (req, res) => {
  const { nome_usuario, email, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const sql = 'INSERT INTO usuarios (nome_usuario, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome_usuario, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send('Erro ao registrar usuário');
      }
      res.send('Usuário registrado com sucesso!');
    });
  } catch (error) {
    res.status(500).send('Erro ao processar a requisição');
  }
});

// Rota de login de usuário
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).send('Erro no servidor');
    }

    if (results.length === 0) {
      return res.status(401).send('Usuário não encontrado');
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(senha, user.senha);

    if (!isMatch) {
      return res.status(401).send('Senha incorreta');
    }

    req.session.userId = user.id;
    req.session.userName = user.nome_usuario;

    res.send('Login realizado com sucesso');
  });
});

// Rota protegida que só pode ser acessada por usuários logados
router.get('/perfil', verificaAutenticacao, (req, res) => {
  res.send(`Bem-vindo, ${req.session.userName}`);
});

// routes.js (adicione esta rota)
router.get('/usuario', (req, res) => {
  if (req.session.userName) {
    res.json({ nome: req.session.userName });
  } else {
    res.status(401).send('Usuário não autenticado');
  }
});


// Rota de logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Erro ao deslogar');
    }
    res.redirect('/'); // Redireciona para a página inicial após logout
  });
});

module.exports = router; // Certifique-se de que o router está sendo exportado corretamente