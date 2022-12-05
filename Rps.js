//----------------Taking References------------------------------->>>>>

const computerChoice = document.querySelector('#computer-choice');
const userChoice = document.querySelector('#user-choice');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll("button");
let opt;
let randomComputerChoice ;
let finalText;

console.log(computerChoice, userChoice, result, buttons);

//-------On button click -- same innerHTML should show on #user-choice'----->>>

// forEach func = on every button, this func should run.
// opt = forEach functions's parameter.
// opt.addEventListener = opt is array element., every element on click func.
// buttonShows = have selected array element's id.

buttons.forEach(opt => opt.addEventListener("click", (e) => {
    buttonShows = e.target.id
    userChoice.innerHTML = buttonShows
    generateComputerRandomNum()
    FinalResult()
    // console.log("User Choice", buttonShows)
}))


//------------------Generate computer's choice [Randomly]------------>>>

function generateComputerRandomNum () {
    const randomNum = Math.floor(Math.random() * buttons.length) // also can * by 3.
    // console.log(randomNum);

    if (randomNum === 1) {
        randomComputerChoice = "paper"
    }
    if (randomNum === 2) {
        randomComputerChoice = "rock" 
    }
    if (randomNum === 3) {
        randomComputerChoice = "scissor"
    }
    if (randomNum === 0) {
        alert("try Again")
    }

    computerChoice.innerHTML = randomComputerChoice;
    // console.log("Computer Choice", randomComputerChoice);
}

//------------Comparison Between Computer && User------------->>>

function FinalResult () {
    console.log(" FinalResult User Choice", buttonShows),
    console.log(" FinalResult Computer Choice", randomComputerChoice);
     
    if (randomComputerChoice === buttonShows) {
        finalText = "It's a draw!😑"
    }
    if (randomComputerChoice === 'rock' && buttonShows === "paper") {
        finalText = "You Win😍"
    }
    if (randomComputerChoice === 'rock' && buttonShows === "scissors") {
        finalText = "You Lost!😓"
    }
    if (randomComputerChoice === 'paper' && buttonShows === "rock") {
        finalText = "You Lost!😓"
    }
    if (randomComputerChoice === 'paper' && buttonShows === "scissors") {
        finalText = "You Win😍"
    }
    if (randomComputerChoice === 'scissors' && buttonShows === "rock") {
        finalText = "You Win😍"
    }
    if (randomComputerChoice === 'scissors' && buttonShows === "paper") {
        finalText = "You Lost!😓"
    }
    result.innerHTML = finalText

}