/*Build a number-guessing game.A user has three tries to guess the number, between 1-100, that the computer picked.
Whenever they guess, let them know if their guess is too high, or too low. If the third try, 
reveal the number the computer chose to them, and let them know if they got it right or wrong.
*/
var x = Math.floor(Math.random() * 100 + 1);
var maxTries = 3;
var numberOfTries = 0
document.getElementById("submitguess").onclick = function() {
  var y = document.getElementById("guessField").value;
  numberOfTries += 1;
  if(numberOfTries >= maxTries)
  {
    alert("You have no more tries" + " " + "The answer is" + " " + x);
    window.location.reload(false);
  }
  
  if(x == y)
  {
    alert("You guessed right!" + " " + "The answer is" + " " + y);
  }
  else if(x > y)
  {
    alert("You guessed wrong! Try a bigger number");
  }
  else
  {
    alert("You guessed wrong! Try a smaller number")
  }  
};