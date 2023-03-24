let playerscore = 0;
let computerscore = 0;

for(let i=0; i<5; i++){
    console.log("\n");
    let score = game();
    if(score=="pw")
        playerscore++;
    else if(score=="cw")
        computerscore++;
    else{}
}

console.log("\nFinal Score- \nComputer- "+ computerscore + "\nPlayer- "+ playerscore + "\n");
if(playerscore>computerscore)
    console.log("Player wins!");
else if(computerscore>playerscore)
    console.log("Computer wins!");
else
    console.log("It's a draw");


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
    if((pC=="Rock" && cC=="Scissors") || (pC=="Scissors" && cC=="Paper") || (pC=="Paper" && cC=="Rock"))
        return "pw";
    else if((cC=="Rock" && pC=="Scissors") || (cC=="Scissors" && pC=="Paper") || (cC=="Paper" && pC=="Rock"))
        return "cw";
    else
        return "draw";
}

function game(){

    let playerChoice = getPlayerChoice();
    console.log(playerChoice);

    let computerChoice = getComputerChoice();
    console.log(computerChoice);

    let result = getRoundWinner(playerChoice, computerChoice);

    if(result=="pw"){
        console.log("You win! " + playerChoice +  " beats " + computerChoice);
    }
    else if(result=="cw"){
        console.log("You lose! " + computerChoice +  " beats " + playerChoice);
    }
    else{
        console.log("It's a draw");
    }
    return result;
}
