// we need a program that takes rock, paper or scissors as input and weighs it against a randomly generated output from those three.
// if the output is the same as the input, that round is a draw. otherwise, the player or the computer gets a point depending on whose input beats that of the other.

let computerScore = 0;
let userScore = 0;


let getComputerChoice = function() {
    if (Math.random() <= 0.33) {
        return "rock";
    } else if (0.33 < Math.random() <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
};

let computerChoice = getComputerChoice();

let getUserChoice = function() {
    let choice = prompt(`what will you choose? \n (rock/paper/scissors)`).toLowerCase();   
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        choice = prompt(`you didn't choose any of the given options! try again. \n (rock/paper/scissors)`).toLowerCase();
    }
};

let userChoice = getUserChoice();

let playRound = function(hChoice, cChoice) {
    if (hChoice === cChoice) {
        console.log("it's a draw! nobody wins a point :((");
    } else if ((hChoice === "rock" && cChoice === "paper") || (hChoice === "paper" && cChoice === "scissors") || (hChoice === "scissors" && cChoice === "rock")) {
        computerScore++;
        console.log("computer wins! better luck next time ;(((");
    } else if ((hChoice === "rock" && cChoice === "scissors") || (hChoice === "paper" && cChoice === "rock") || (hChoice === "scissors" && cChoice === "paper")) {
        userScore++;
        console.log("you win!!! keep it up :DDDD");
    } else {
        console.log("you didn't input a value... try again!");
    }
};
