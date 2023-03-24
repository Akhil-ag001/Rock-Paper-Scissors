let playerscore = 0;
let computerscore = 0;

let computerChoice = getComputerChoice();
console.log(computerChoice);

let playerChoice = getPlayerChoice();
console.log(playerChoice);

let result = getRoundWinner(playerChoice, computerChoice);
if(result=="pw"){
    console.log("You win! " + playerChoice +  " beats " + computerChoice);
    playerscore++;
}
else if(result=="cw"){
    console.log("You lose! " + computerChoice +  " beats " + playerChoice);
    computerscore++;
}
else{
    console.log("It's a draw");
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    
    if(choice==0)
        return "Rock";
    else if(choice==1)
        return "Paper";
    else
        return "Scissors";
}

function getPlayerChoice(){
    let choice = prompt("Enter your choice- ");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}

function getRoundWinner(pC, cC){
    if((pC=="rock" && cC=="Scissors") || (pC=="Scissors" && cC=="Paper") || (pC=="Paper" && cC=="Rock"))
        return "pw";
    else if((cC=="rock" && pC=="Scissors") || (cC=="Scissors" && pC=="Paper") || (cC=="Paper" && pC=="Rock"))
        return "cw";
    else
        return "draw";
}
