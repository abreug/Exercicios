const cards = document.querySelectorAll('.card'); // Todas as nossas cards
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // impede que vire um 3º card enquanto tem 2 abertos sendo comparados pelo programa

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip'); // Vai adicionar a classe flip que estamos selecionando a card
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
} 

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return; // comparando os cards de forem iguais segue o jogo, se forem diferentes, as cartas voltam ao normal
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListerner('click',flipCard);
    secondCard.removeListerner('click',flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout (() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [null,null];
}

(function shuflle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click',flipCard) // gerar lista de eventos que vai percorrer em cada card clicado vai ser adicionado o flip, que é o efeito de virar o card
});