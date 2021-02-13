// define variables

var wins= 0;
var ties= 0;
var losses= 0;
var runAgain;


// runs game
function game(){

// define choices array 
var gameChoices= ["R","P","S"];

//computer random guess 

var compChoices= gameChoices[Math.floor(Math.random() * gameChoices.length)];

//Prompt user, get users guess

window.alert("Welcome to Rock, Paper, Scissors");

var userGuess= window.prompt("please enter a choice of R, P, or S");

if (!userGuess) {
    return;
}
else if (!gameChoices.includes(userGuess)) {
    userGuess = window.prompt("Invalid selection. Please enter R, P, or S");
}

//Compare the two values (user guess and computer guess) to identify if user wins, loses, or ties
console.log(userGuess);
console.log(compChoices);

if(userGuess == compChoices) {
    ties++;
    window.alert("Computer Guess: " + compChoices);
    window.alert("TIE");
}
else if ((userGuess == "R" && compChoices == "S")||(userGuess == "S" && compChoices == "P")||(userGuess == "P" && compChoices == "R")){
    win++;
    window.alert("Computer Guess: " + compChoices);
    window.alert("WIN");
}
else {
    losses++;
    window.alert("Computer Guess: " + compChoices);
    window.alert("LOSER");
}

//alerts for gameplay

alert("Wins:" + wins + "\n" +"Losses:" + losses + "\n" + "Ties:" + ties);

runAgain= window.confirm("Would you like to play again?")
//prompt to play again?
console.log(runAgain);
}

//runs game
game();

//runs game again
while(runAgain){
    game();
}

