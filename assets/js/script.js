
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
 

//  counter = 0
 document.title=("Blackjack")

 startGameBtn.addEventListener("click",function(){

  let given =200
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
    nameEl.innerHTML=`Walid:$ ${given} `
    if(sumAll==21){
      phraseEl.innerHTML=`COngrats !`
    }else if(sumAll>21){
      phraseEl.innerHTML=`Go to hell!`
    }
    else {
      newCardBtn.addEventListener("click",function newCard(){
        phraseEl.innerHTML=`Wanna add a new card?!`  
      let card = Math.floor(Math.random(blackjack)*blackjack.length)
      sumAll+=card
      given-=50
      cardsEl.innerHTML+=` ${card}`
      sumEl.innerHTML=`Sum: ${sumAll}`
      nameEl.innerHTML=`Walid: ${given}`

      if(sum>21){
        phraseEl.innerHTML=`Go to hell!`
        newCardBtn.removeEventListener("click",newCard)
      }
      else if(sum==21){
        phraseEl.innerHTML=`Congrats!`
        newCardBtn.removeEventListener("click",newCard)
      }else if(sum<21){
        phraseEl.innerHTML=`wanna add another card?`
      }
      })
    }
   
    
 })
 
//  newCardBtn.addEventListener("click",function(){
//   // let anyCard = Math.floor(Math.random(blackjack)*blackjack.length)  
  
//   //  if(sumAll<21){

//   //   sumAll += anyCard

     
//   //     cardsEl.innerHTML+=`Cards: ${anyCard}`
//   //     sumEl.innerHTML=`Sum: ${sumAll}`
      
//    }
//  })
 resetBtn.addEventListener("click",function(){
  window.location.replace("index.html")
   
 })