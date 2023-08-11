let phraseEl = document.getElementById("phrase")
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let startGameBtn = document.getElementById("startGame")
let newCardBtn = document.getElementById("newCard")
let resetBtn = document.getElementById("reset")
let nameEl = document.getElementById("name")

const blackjack =[1,2,3,4,5,6,7,8,9,10,11,12,13]

document.title=("Blackjack")

startGameBtn.addEventListener("click",function(){
    let card = Math.floor(Math.random(blackjack)*blackjack.length)
    let card02 = Math.floor(Math.random(blackjack)*blackjack.length)
    cardsEl.innerHTML=` Cards: ${blackjack[card]} ${blackjack[card02]} `
})
