// we need a program that takes rock, paper or scissors as input and weighs it against a randomly generated output from those three.
// if the output is the same as the input, that round is a draw. otherwise, the player or the computer gets a point depending on whose input beats that of the other.

console.log("hlejo");
let getComputerChoice = function() {
    if (Math.random() <= 0.33) {
        return "rock";
    } else if (0.33 < Math.random() <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
};