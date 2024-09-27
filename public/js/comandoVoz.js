// Variável para controlar o estado da fala
let falaEmAndamento = false;

// Função que apenas ativa o comando de voz
function falarInstrucao(texto) {
    const sintese = window.speechSynthesis;
    const mensagem = new SpeechSynthesisUtterance(texto);
    mensagem.lang = 'pt-BR'; // Define o idioma para português do Brasil
    mensagem.rate = 1; // Ajusta a velocidade da fala
    mensagem.pitch = 1; // Ajusta o tom da voz
    mensagem.volume = 1; // Ajusta o volume

    mensagem.onend = () => {
        // Reabilita os botões após o término da fala
        falaEmAndamento = false;
        habilitarBotoes();
    };

    sintese.speak(mensagem);
}

// Função para iniciar o comando de voz com um atraso
function iniciarComandoVoz(exercicioNome, instrucoes) {
    const texto = `${exercicioNome}. ${instrucoes}`;
    
    // Adiciona um atraso de 500ms para garantir que o flip ocorra primeiro
    setTimeout(() => {
        falarInstrucao(texto);
    }, 500); // O tempo pode ser ajustado conforme necessário
}

// Função para pegar as instruções e acionar o comando de voz após o flip
function adicionarComandoVozNoExercicio(button) {
    // Verifica se já há uma fala em andamento
    if (falaEmAndamento) return;

    // Desabilita os botões enquanto a fala está em andamento
    falaEmAndamento = true;
    desabilitarBotoes();

    // Pegando o nome do exercício e as instruções
    const exercicioNome = button.closest('.flip-cards-front').querySelector('h3').textContent;
    const instrucoes = button.closest('.flip-cards-front').querySelector('p').textContent;

    // Chamando a função para iniciar o comando de voz com atraso
    iniciarComandoVoz(exercicioNome, instrucoes);
}

// Função para desabilitar todos os botões "Iniciar"
function desabilitarBotoes() {
    const botoes = document.querySelectorAll('.start-exercise');
    botoes.forEach(botao => botao.disabled = true);
}

// Função para habilitar todos os botões "Iniciar"
function habilitarBotoes() {
    const botoes = document.querySelectorAll('.start-exercise');
    botoes.forEach(botao => botao.disabled = false);
}