let phraseEl = document.getElementById("phrase")
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let startGameBtn = document.getElementById("startGame")
let newCardBtn = document.getElementById("newCard")
let resetBtn = document.getElementById("reset")
let nameEl = document.getElementById("name")

const blackjack =[1,2,3,4,5,6,7,8,9,10,11,12,13]

let given = 200

document.title=("Blackjack")


startGameBtn.addEventListener("click",function(){
    

    let card01 = Math.floor(Math.random(blackjack)*blackjack.length)
    let card02 = Math.floor(Math.random(blackjack)*blackjack.length)
    cardsEl.innerHTML=` Cards: ${blackjack[card01]} ${blackjack[card02]} `
    phraseEl.innerHTML=`Want to start a new game?`
    let sum = blackjack[card01] + blackjack[card02]
    sumEl.innerHTML = `Sum: ${sum}`
    nameEl.innerHTML = `Walid:$ ${given-50}`
   
})

resetBtn.addEventListener("click",function(){
    cardsEl.innerHTML = ` Cards: `
    phraseEl.innerHTML=`Want to play around?`
    sumEl.innerHTML = `Sum: `
    nameEl.innerHTML = `Walid:$ ${given}`
})

newCardBtn.addEventListener("click",function(){
    if(sum<21){
        
    }
})