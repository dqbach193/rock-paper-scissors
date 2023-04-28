function getComputerChoice(){
    //Choose a random number between 0 and 99
    let num = Math.floor(Math.random() * 100);
    //If 0-32 return Rock, 33-65 return Paper, 67-99 return Scissors
    if(num < 33){
        return "rock";
    }else if(num < 67){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    //compare the user choice to computer choice
    //When it is draw
    if(playerSelection === computerSelection){
        return "Draw!";
    }
    //When the player chooses rock
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            return 'You lose! Paper beats Rock';
        }else{
            return 'You win! Scissors lose to Rock';
        }
    }
    //When the player chooses paper
    if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return 'You lose! Scissors beats Paper';
        }else{
            return 'You win! Rock lose to Paper';
        }
    }
    //When the player chooses scissors
    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return 'You lose! Rock beats Scissors';
        }else{
            return 'You win! Paper lose to Scissors';
        }
    }
}

function game(){
    let userScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++){
        //prompt user input
        let playerSelection = prompt("Please make a choice:");
        //take user's input and make it lowercase
        playerSelection = playerSelection.toLowerCase();
        //make a variable and take computer choice
        let computerSelection = getComputerChoice();
        //Print out result
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result === "Draw!"){
            continue;
        }else if (result.charAt(4) === "L"){
            compScore = compScore + 1;
            continue;
        }else{
            userScore = userScore + 1;
            continue;
        }
    }
    if(userScore < compScore){
        console.log('You Lost! Better luck next time');
        console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
        return;
    }else{
        console.log('You Won! Congratulations :D');
        console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
        return;
    }
}