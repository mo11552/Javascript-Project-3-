/*Build a number-guessing game.A user has three tries to guess the number, between 1-100, that the computer picked.
Whenever they guess, let them know if their guess is too high, or too low. If the third try, 
reveal the number the computer chose to them, and let them know if they got it right or wrong.
*/
var x = Math.floor(Math.random() * 100 + 1);
var maxTries = 3;
var i = 0
document.getElementById("submitguess").onclick = function() {
  var y = document.getElementById("guessField").value;
  i += 1;
  if(i > maxTries)
  {
    alert("You have no more tries");
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