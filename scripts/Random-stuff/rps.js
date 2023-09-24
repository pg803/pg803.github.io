// Fix score count and overall winner
var clickCount = 0;
var maxClicks = 5;
let wins = 0;
let losses = 0;
var PlayerSelection;
	  
function handleClick() {
	clickCount++;
	if (clickCount >= maxClicks) {
	document.getElementById("rock").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("scissor").disabled = true;
	document.getElementById("refreshMessage").innerHTML = "Please refresh the page.";
	}
}

function Rock(){
  PlayerSelection = "R";
  console.log(PlayerSelection);
  game()
}

function Paper(){
  PlayerSelection = "P";
  console.log(PlayerSelection);
  game()
}

function Scissor(){
  PlayerSelection = "S";
  console.log(PlayerSelection);
  game()
}

var rock = document.getElementById("rock")
rock.addEventListener("click", Rock);

var paper = document.getElementById("paper")
paper.addEventListener("click", Paper);

var scissor = document.getElementById("scissor")
scissor.addEventListener("click", Scissor);

function getComputerChoice() {
  const GameChoices = ["R", "P", "S"];

  let computerSelection = Math.floor(Math.random() * GameChoices.length);
  return GameChoices[computerSelection];
}
getComputerChoice();

function playRound(PlayerSelection, computerSelection) {
  if (PlayerSelection == "R") {
    if (computerSelection == "R") {
      document.getElementById("roundResult").innerHTML = "Tie";    
    } else if (computerSelection == "P") {
      document.getElementById("roundResult").innerHTML = "You lose";
      losses += 1
    } else if (computerSelection == "S") {
      document.getElementById("roundResult").innerHTML = "You win";
      wins += 1
    }
  } else if (PlayerSelection == "P") {
    if (computerSelection == "P") {
      document.getElementById("roundResult").innerHTML = "Tie";
    } else if (computerSelection == "S") {
      document.getElementById("roundResult").innerHTML = "You lose";
      losses += 1
    } else if (computerSelection == "R") {
      document.getElementById("roundResult").innerHTML = "You win";
      wins += 1
    }
  } else if (PlayerSelection == "S") {
    if (computerSelection == "S") {
      document.getElementById("roundResult").innerHTML = "Tie";
    } else if (computerSelection == "R") {
      document.getElementById("roundResult").innerHTML = "You lose";
      losses += 1
    } else if (computerSelection == "P") {
      document.getElementById("roundResult").innerHTML = "You win";
      wins += 1
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    roundWinner = playRound(PlayerSelection, computerSelection);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
  }
  if (wins < losses) {
    console.log("overall winner is computer");
  } else if (wins > losses) {
    console.log("overall winner is you");
  } else if (wins == losses) {
    console.log("It's a tie!");
  }
}
