// /middlewares/authMiddleware.js

function verificaAutenticacao(req, res, next) {
    if (req.session.userId) {
      // Se o usuário está logado, continua para a próxima função
      return next();
    }
    // Se não estiver logado, redireciona para a página de login
    res.redirect('/login.html');
  }
  
  module.exports = verificaAutenticacao;
  