// let phraseEl = document.getElementById("phrase")
// let cardsEl = document.getElementById("cards")
// let sumEl = document.getElementById("sum")
// let startGameBtn = document.getElementById("startGame")
// let newCardBtn = document.getElementById("newCard")
// let resetBtn = document.getElementById("reset")
// let nameEl = document.getElementById("name")

// const blackjack =[1,2,3,4,5,6,7,8,9,10,11,12,13]

// let given = 200

// document.title=("Blackjack")

//         let card01 = Math.floor(Math.random(blackjack)*blackjack.length)
//         let card02 = Math.floor(Math.random(blackjack)*blackjack.length)
//         let card03 = Math.floor(Math.random(blackjack)*blackjack.length)


// startGameBtn.addEventListener("click",function(){

//     cardsEl.innerHTML=` Cards: ${blackjack[card01]} ${blackjack[card02]} `
//     phraseEl.innerHTML=`Want to start a new game?`
//     let sum = blackjack[card01] + blackjack[card02]
//     sumEl.innerHTML = `Sum: ${sum}`
//     nameEl.innerHTML = `Walid:$ ${given-50}`
//     if(sum==21 || sum>21){
//         phraseEl.innerHTML=`You won!Congrats`
//     }
    


//     newCardBtn.addEventListener("click",function(){

//     cardsEl.innerHTML=` Cards: ${blackjack[card01]} ${blackjack[card02]} ${blackjack[card03]} `
//     let sum02 = blackjack[card01] + blackjack[card02] + blackjack[card03] 
//     sumEl.innerHTML=`Sum: ${sum02} `
    
//     if(sum==21 || sum>21){
//         phraseEl.innerHTML=`You won!Congrats`
//     }
    
// })
   
// })

// // newCardBtn.addEventListener("click",function(){
        
// //         // for(let i in blackjack){

// //         // }


// //     cardsEl.innerHTML=` Cards: ${blackjack[card01]} ${blackjack[card02]} ${blackjack[card03]} `
// //     let sum02 = blackjack[card01] + blackjack[card02] + blackjack[card03] 
// //     sumEl.innerHTML=`Sum: ${sum02} `
    

    
// // })

// resetBtn.addEventListener("click",function(){
//     let sum = " "
//     let card01 ,card02 ,card03 = 0
//     cardsEl.innerHTML = ` Cards: ${blackjack[card01]} ${blackjack[card02]} ${blackjack[card03]} `
//     phraseEl.innerHTML=`Want to play around?`
//     sumEl.innerHTML = `Sum:${sum} `
//     nameEl.innerHTML = `Walid:$ ${given}`
    
// })
let phraseEl = document.getElementById("phrase")
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let startGameBtn = document.getElementById("startGame")
let newCardBtn = document.getElementById("newCard")
let resetBtn = document.getElementById("reset")
let nameEl = document.getElementById("name")

const blackjack =[1,2,3,4,5,6,7,8,9,10,11,12,13]
 let startGame = false
 let x=[]
 let given =200

//  counter = 0
 document.title=("Blackjack")

 startGameBtn.addEventListener("click",function(){

  3
   
    startGame=true
    startGameBtn.disabled=true
    newCardBtn.disabled=false
    resetBtn.disabled=false
    x=[]
    phraseEl.innerHTML=`Want to start a new game?`
    let cards01 = Math.floor(Math.random(blackjack)*blackjack.length)
    let cards02 = Math.floor(Math.random(blackjack)*blackjack.length)
    let sumAll = cards01+cards02
    cardsEl.innerHTML=`Cards: ${cards01} ${cards02}`
    sumEl.innerHTML=`Sum: ${sumAll}`
    nameEl.innerHTML=`Walid:$ ${given-50} `
    if(sumAll==21 || sumAll>21){
      phraseEl.innerHTML=`COngrats !`
    }else if(sumAll<21){
      phraseEl.innerHTML=`Wanna add a new card?`
    }
   
    
 })
 
 newCardBtn.addEventListener("click",function(){
  let anyCard = Math.floor(Math.random(blackjack)*blackjack.length)  
  
   if(sumAll<21){

    sumAll += anyCard

     
      cardsEl.innerHTML+=`Cards: ${anyCard}`
      sumEl.innerHTML=`Sum: ${sumAll}`
      
   }
 })
 resetBtn.addEventListener("click",function(){
   
   startGameBtn.disabled=false
   newCardBtn.disabled=true
   resetBtn.disabled=true
   x=[]

   phraseEl.innerHTML=`Want to start a new game?`
   cardsEl.innerHTML=`Cards:`
   sumEl.innerHTML=`Sum: `
   nameEl.innerHTML=`Walid:$ ${given} `

 })