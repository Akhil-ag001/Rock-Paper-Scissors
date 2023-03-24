let playerscore = 0;
let computerscore = 0;
let computerChoice = getComputerChoice();
console.log(computerChoice);
let playerChoice = getPlayerChoice();
console.log(playerChoice);


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
