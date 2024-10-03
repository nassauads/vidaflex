// Função para fechar todos os cards abertos
function fecharTodosOsCards() {
    document.querySelectorAll('.flip-card').forEach(card => {
        card.classList.remove('flip');
    });
}

// Adiciona evento de flip ao clicar no botão "Clique-me" e ao clicar no card
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function (event) {
        event.stopPropagation(); // Previne a propagação do clique
        if (!this.classList.contains('flip')) { // Verifica se o card já está aberto
            fecharTodosOsCards(); // Fecha todos os cards abertos
            this.classList.add('flip'); // Abre o card atual
        }
    });
});

// Adiciona evento para fechar o flip ao clicar no botão "X"
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        this.closest('.flip-card').classList.remove('flip');
    });
});

// Função para redirecionar o usuário para uma nova URL
function redirecionar(url) {
    window.location.href = url;
}

// Função para redirecionar o usuário para a página de login
function redirecionarParaLogin() {
    window.location.href = 'login.html'; // Substitua 'login.html' pelo caminho correto da sua página de login
}

// Verifica se o usuário está logado ao carregar a página
fetch('/perfil')
.then(response => {
    if (!response.ok) {
        window.location.href = 'login.html'; // Redireciona para o login se não estiver autenticado
    }
})
.catch(() => window.location.href = 'login.html'); // Em caso de erro, redireciona

// Quando a página carregar, exibe a animação da frase
window.addEventListener('load', function() {
    const impactPhrase = document.querySelector('.impact-phrase');
    impactPhrase.classList.add('show'); // Adiciona a classe para iniciar a animação
});
