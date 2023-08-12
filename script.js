function getComputerChoice()
{
    let num = genRandomInt(1,4)
    let choice;
    if (num == 1)
    {
        return "Rock"
    }
    else if (num == 2)
    {
        return "Paper"
    }
    else
    {
        return "Scissors"
    }
}

function genRandomInt(min,max)
{
    //returns a random number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max-min)) + min
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == computerSelection)
    {
        return "Tie, you both picked " + playerSelection;
    }

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissors") 
        {
            return "You win! Rock beats Scissors";
        }
        if (computerSelection == "paper") 
        {
            return "You Lose! Paper beats Rock";
        }
    }

    if (playerSelection == "paper")
    {
        if (computerSelection == "scissors") 
        {
            return "You Lose! Scissors beats Paper"
        }
        if (computerSelection == "rock") 
        {
            return "You Win! Paper beats Rock"
        }
    }

    if (playerSelection == "scissors")
    {
        if (computerSelection == "rock") 
        {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection == "paper") 
        {
            return "You Win! Scissors beats Paper";
        }
    }
}

function playRound2(playerSelection, computerSelection)
{
    //return 1 if player won and 0 if computer won
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == computerSelection)
    {
        return 0;
    }

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissors") 
        {
            return 1;
        }
        if (computerSelection == "paper") 
        {
            return 0;
        }
    }

    if (playerSelection == "paper")
    {
        if (computerSelection == "scissors") 
        {
            return 0;
        }
        if (computerSelection == "rock") 
        {
            return 1;
        }
    }

    if (playerSelection == "scissors")
    {
        if (computerSelection == "rock") 
        {
            return 0;
        }
        if (computerSelection == "paper") 
        {
            return 1;
        }
    }
}

function game()
{
    let winCount = 0
    for(let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Enter your selection")
        let computerChoice =  getComputerChoice()
        winCount += playRound2(playerChoice,computerChoice)
    }

    if (winCount>=3) 
    {
        console.log("You Won!")
    }
    else
    {
        console.log("Computer Won!")
    }
}

// const playerSelection = "rock"
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection,computerSelection))

// game()

let winCount = 0;
const winOutcomeDiv = document.getElementById("win-outcome");
const scoreDiv = document.getElementById("score");

const btnRock = document.getElementById("rock");
btnRock.addEventListener("click", function() {
    let computerChoice =  getComputerChoice();
    let outcome = playRound("rock",computerChoice);
    winCount += playRound2("rock",computerChoice);
    winOutcomeDiv.textContent = outcome;
    scoreDiv.textContent = winCount.toString();
});

const btnPaper = document.getElementById("paper");
btnPaper.addEventListener("click", function() {
    let computerChoice =  getComputerChoice();
    let outcome = playRound("paper",computerChoice);
    winCount += playRound2("paper",computerChoice);
    winOutcomeDiv.textContent = outcome;
    scoreDiv.textContent = winCount.toString();
});

const btnScissors = document.getElementById("scissors");
btnScissors.addEventListener("click", function() {
    console.log("clicked")
    let computerChoice =  getComputerChoice();
    let outcome = playRound("scissors",computerChoice);
    winCount += playRound2("scissors",computerChoice);
    winOutcomeDiv.textContent = outcome;
    scoreDiv.textContent = winCount;
    console.log(winCount)
});