// let age = 20

// if (age < 21) {
//     console.log("Sorry, you are too young to play!")
// } else {
//     console.log("Welcome to the Blackjack Game!")
// } 


let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el");
let cardsEl = document.getElementById("cards-el");

//logic to get a random card back
function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    return randomCard
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:  " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    totalEl.textContent = "Total: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You lose!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    messageEl.textContent = "Drawing a new card from the deck!"
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
}

