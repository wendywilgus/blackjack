// let age = 20

// if (age < 21) {
//     console.log("Sorry, you are too young to play!")
// } else {
//     console.log("Welcome to the Blackjack Game!")
// } 

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Wendy",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//logic to get a random card back
function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1;
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if (isAlive === true && hasBlackJack === false) {
        messageEl.textContent = "Drawing a new card from the deck!"
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards)
        renderGame();
    }
}

