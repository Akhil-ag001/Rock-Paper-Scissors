let playerScore = 0;
let compScore = 0;

let playerChoice = "";
let compChoice = "";
let result = "";

const inputs = document.querySelectorAll('.input');
const results = document.querySelector('#result');
const score = document.querySelector('#score');

gameStart();

inputs.forEach((button) => {
    button.addEventListener('click', (e) =>{
        playerChoice = button.getAttribute('id');
        compChoice = getCompChoice();
        result = getResult(playerChoice, compChoice);
        displayResult(result);
    })
})

function getCompChoice(){
    let choice = Math.floor(Math.random()*3);
    
    if(choice==0)
        return "Rock";
    else if(choice==1)
        return "Paper";
    else
        return "Scissors";
}

function getResult(pC, cC){

    if((pC=="Rock" && cC=="Scissors") || (pC=="Scissors" && cC=="Paper") || (pC=="Paper" && cC=="Rock"))
        return "pw";
    else if((cC=="Rock" && pC=="Scissors") || (cC=="Scissors" && pC=="Paper") || (cC=="Paper" && pC=="Rock"))
        return "cw";
    else
        return "draw";
}

function displayResult(result){

    if(result=="pw"){
        results.textContent = "You win! " + playerChoice + " beats " + compChoice;
        playerScore++;
        score.textContent = playerScore + " - " + compScore;
    }
    else if(result=="cw"){
        results.textContent = "You lose! " + compChoice + " beats " + playerChoice;
        compScore++;
        score.textContent = playerScore + " - " + compScore;
    }
    else{
        results.textContent = "It\'s a draw";
        score.textContent = playerScore + " - " + compScore;
    }
}

function gameStart(){
    compScore = 0;
    playerScore = 0;

    score.textContent = playerScore + " - " + compScore;
    results.textContent = "Result will be displayed here";
}