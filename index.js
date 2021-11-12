let num1=randomValue()
let num2=randomValue()

let message=""
let cards=[num1, num2]
let sum=num1+num2

let messageEl=document.getElementById('message-el')
let cardsEl=document.getElementById('cards-el')
let sumEl=document.getElementById('sum-el')

let hasBlackJack=false
let isAlive=true
function startgame()
{
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<21)
    {
        message = "Do you want to draw a new card?"
    }
    else if(sum===21)
    {
        message = "You've got Blackjack!"
        hasBlackJack=true   
    }
    else
    {
        message = "You're out of the game!"
        isAlive=false
    }

    messageEl.textContent=message
}

function newcard()
{
    if(isAlive===true && hasBlackJack===false)
    {
        let num3=randomValue()
        sum+=num3
        cards.push(num3)
        startgame()
        console.log("hello")
    }
}

function randomValue()
{
    return Math.floor(Math.random()*12)+1
}
