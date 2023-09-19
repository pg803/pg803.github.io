L = 0;
W = 0;
function getComputerChoice(){
    const GameChoices = ['R', 'P', 'S'];

    let computerSelection = Math.floor(Math.random() * GameChoices.length);
    return GameChoices[computerSelection];
}
getComputerChoice()

function playRound(PlayerSelection, computerSelection){
    if (PlayerSelection == "R"){
        if (computerSelection == "R"){
            console.log("Tie")
        }
        else if(computerSelection == "P"){
            console.log("You lose")
            L += 1
        }
        else if(computerSelection == "S"){
            console.log("you win")
            W += 1
        }
    }
    else if(PlayerSelection == "P"){
        if(computerSelection == "P"){
            console.log("Tie")
        }
        else if(computerSelection == "S"){
            console.log("You lose")
            L += 1
        }
        else if(computerSelection == "R"){
            console.log("You win")
            W += 1
        }
    }
    else if(PlayerSelection == "S"){
        if(computerSelection == "S"){
            console.log("Tie")
        }
        else if(computerSelection == "R"){
            console.log("You lose")
            L += 1
        }
        else if(computerSelection == "P"){
            console.log("You win")
            W += 1
        }
    }
    }

function game(){
    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter your choice: ");
        roundWinner = playRound(playerSelection, computerSelection);
        console.log(roundWinner);
    }
    if(W < L){
            console.log("overall winner is computer")
    }
    else if (W > L){
        console.log("overall winner is you")
    }
    else if (W == L){
        console.log("Its a tie!")
    }
}