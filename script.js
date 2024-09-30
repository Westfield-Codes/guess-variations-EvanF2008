
// define function guessGame
function(){
  // generate a random integer 1-100
  var answer = Math.floor(Math.random()*1+100);
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 
  var guess = 0
  // loop while guess is not equal to answer
while (guess ! = answer){
    // set guess equal to asking user to "Guess a number, 1-100"
 guess = prompt("guess a number 1-100");
    // if guess equals answer display "Correct!" 
if (guess == answer ); alert("CORRECT");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert(TOO HIGH!);
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("TOO LOW!")
    // else say "Bad input"
else alert("bro i said 1-100..");
  // end the loop
}
// end the function
}







