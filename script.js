let playerscore = 0;
let computerscore = 0;
let computerChoice = getComputerChoice();
console.log(computerChoice);


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    
    if(choice==0)
        return "Rock";
    else if(choice==1)
        return "Paper";
    else
        return "Scissors";
}
