let interval;
let preparationInterval;
let timeLeft;
let isPaused = false;
let preparationTime = 10; // Tempo de preparação antes de iniciar o exercício

// Função para iniciar o exercício e virar o card
function iniciarExercicio(button) {
    const card = button.closest('.flip-card');

    // Verifica se há algum card atualmente virado
    const anyFlippedCard = document.querySelector('.flip-card.flip');

    // Se houver um card já virado e não for o atual, impede a ação
    if (anyFlippedCard && anyFlippedCard !== card) {
        alert("Finalize o exercício atual antes de iniciar outro.");
        return;
    }

    card.classList.add('flip'); // Vira o card
    const timeSelect = card.querySelector('.time-select');
    timeLeft = parseInt(timeSelect.value);
    startPreparation(card); // Inicia o tempo de preparação
}

// Função para iniciar o tempo de preparação
function startPreparation(card) {
    preparationTime = 10; // Define o tempo de preparação inicial
    const timerDisplay = card.querySelector('.timer');
    const controlButtons = card.querySelector('.control-buttons');
    controlButtons.style.display = 'none'; // Esconde os botões durante a preparação
    timerDisplay.classList.add('preparation'); // Adiciona a classe de preparação
    updatePreparationDisplay(card); // Atualiza o display do temporizador de preparação
    preparationInterval = setInterval(() => {
        if (preparationTime > 0) {
            preparationTime--; // Diminui o tempo de preparação
            updatePreparationDisplay(card); // Atualiza o display
        } else {
            clearInterval(preparationInterval); // Para o tempo de preparação
            timerDisplay.classList.remove('preparation'); // Remove a classe de preparação
            controlButtons.style.display = 'flex'; // Mostra os botões após a preparação
            startTimer(card); // Inicia o temporizador do exercício
        }
    }, 1000);
}

// Função para exibir a contagem regressiva de preparação
function updatePreparationDisplay(card) {
    const timerDisplay = card.querySelector('.timer');
    timerDisplay.textContent = `Prepare-se: 00:${preparationTime < 10 ? '0' : ''}${preparationTime}`;
}

// Função para iniciar o temporizador do exercício
function startTimer(card) {
    clearInterval(interval);
    interval = setInterval(() => {
        if (!isPaused && timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay(card);
        } else if (timeLeft <= 0) {
            clearInterval(interval);
            mostrarMensagemTemporaria(card, "Tempo esgotado!");
        }
    }, 1000);
}

// Função para mostrar uma mensagem temporária no card
function mostrarMensagemTemporaria(card, mensagem) {
    // Cria um elemento de mensagem
    const mensagemElemento = document.createElement('div');
    mensagemElemento.classList.add('mensagem-temporaria');
    mensagemElemento.textContent = mensagem;

    // Adiciona a mensagem temporária ao card
    card.appendChild(mensagemElemento);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagemElemento.remove();
    }, 3000);
}


// Função para pausar o temporizador
function pausarTempo() {
    isPaused = !isPaused;
}

// Função para parar o temporizador e resetar o tempo
function pararTempo() {
    clearInterval(interval);
    isPaused = false;
    timeLeft = 0;
    updateTimerDisplay(document.querySelector('.flip-card.flip'));
}

// Função para reiniciar o temporizador
function reiniciarTempo() {
    clearInterval(interval);
    timeLeft = parseInt(document.querySelector('.flip-card.flip .time-select').value);
    updateTimerDisplay(document.querySelector('.flip-card.flip'));
    isPaused = false;
    startTimer(document.querySelector('.flip-card.flip'));
}

// Atualiza a exibição do temporizador do exercício
function updateTimerDisplay(card) {
    const timerDisplay = card.querySelector('.timer');
    timerDisplay.textContent = `Tempo: 00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
}

// Função para fechar o card e parar o temporizador
function fecharCard(button) {
    const card = button.closest('.flip-card');
    card.classList.remove('flip');
    clearInterval(preparationInterval); // Para o tempo de preparação
    pararTempo(); // Para o temporizador do exercício
}