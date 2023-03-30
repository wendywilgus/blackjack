let age = 20

if (age < 21) {
    console.log("Sorry, you are too young to play!")
} else {
    console.log("Welcome to the Blackjack Game!")
} 


let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let gameOver = true
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el");
let cardsEl = document.getElementById("cards-el");


function start() {
    cardsEl.textContent = "Cards: 10 4 ";
    totalEl.textContent = "Total: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You lose!"
        gameOver = false
    }
    messageEl.textContent = message
}



