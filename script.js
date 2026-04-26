// Aguarda o carregamento completo do DOM
 document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const button = document.getElementById('clickButton');
    const counterDisplay = document.getElementById('counterDisplay');

    // Estado do contador
    let clickCount = 0;

    // Função para atualizar o contador na tela
    function updateCounter() {
        counterDisplay.textContent = `Você clicou ${clickCount} vez${clickCount !== 1 ? 'es' : ''}.`;
    }

    // Evento de clique no botão
    button.addEventListener('click', function() {
        clickCount++;
        updateCounter();
    });

    // Inicializa o contador
    updateCounter();
});