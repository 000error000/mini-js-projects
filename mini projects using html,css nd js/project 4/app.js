let randomNum = parseInt(Math.random()*100 + 1); 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validGuess(guess)
    })
}

function validGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number -_-")
    }else if(guess < 1){
        alert("Please enter a number greater then 1 ")
    }else if(guess > 100){
        alert("Please enter a number less then 10")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over . Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`Congrates Player, you guessed it right and the random number was ${randomNum} `)
        endGame()
    }else if(guess > randomNum){
        displayMessage(`Number is too high, try again. `)
    }else if (guess < randomNum){
        displayMessage(`Number is too low, try again. `)
    }
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ''
    guessesSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start a new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100 + 1); 
        prevGuess = []
        numGuess = 1
        guessesSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame = true
    })
}








