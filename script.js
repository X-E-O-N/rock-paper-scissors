// we need a program that takes rock, paper or scissors as input and weighs it against a randomly generated output from those three.
// if the output is the same as the input, that round is a draw. otherwise, the player or the computer gets a point depending on whose input beats that of the other.
// after 5 rounds, the party with the highest score wins.

let getComputerChoice = function() {
    let choice;
    if (Math.random() <= 0.33) {
        choice = "rock";
    } else if (0.33 < Math.random() <= 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
};

let getUserChoice = function() {
    let choice = prompt(`what will you choose? \n (rock/paper/scissors)`).toLowerCase();   
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        choice = prompt(`you didn't choose any of the given options! try again. \n (rock/paper/scissors)`).toLowerCase();
    }
};

let computerScore = 0;
let userScore = 0;

let playRound = function(hChoice, cChoice) {
    if (hChoice === cChoice) {
        console.log("it's a draw! nobody wins a point ._.");
    } else if ((hChoice === "rock" && cChoice === "paper") || (hChoice === "paper" && cChoice === "scissors") || (hChoice === "scissors" && cChoice === "rock")) {
        computerScore++;
        console.log("computer wins! better luck next time T_T");
    } else if ((hChoice === "rock" && cChoice === "scissors") || (hChoice === "paper" && cChoice === "rock") || (hChoice === "scissors" && cChoice === "paper")) {
        userScore++;
        console.log("you win!!! keep it up ^U^");
    } else {
        console.log("you didn't input a value... try again!");
    }
};

let executeRound = function() {
    let userChoice = getUserChoice();
    console.log(`you chose: ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`computer chose: ${computerChoice}`);
    playRound(userChoice, computerChoice);
};

let playGame = function() {
    for (let i = 0; i < 5; i++) {
        console.log(`round ${i + 1}`);
        executeRound();
        console.log(`computer's score: ${computerScore}, your score: ${userScore}`);
    }
    
    if (userScore > computerScore) {
        console.log(`you win by ${userScore - computerScore} points!! hooray!!!! :DDDD`);
    } else if (userScore === computerScore) {
        console.log(`the game is a tie by ${userScore} points... ^^`);
    } else {
        console.log(`you lose by ${computerScore - userScore} points.... U_U try again!`);
    }
};

playGame();

// 69 lines of code.