function application() {
  function compareNumbers (randomNumber, userSelectedNumber) {
      if (isNaN(Number(userSelectedNumber))) {
          return error();
      }
      if (randomNumber > userSelectedNumber) {
          return bigger();
      }
      else if (randomNumber < userSelectedNumber) {
          return smaller();
      }
      else {
          return win();
      }
  }

  function getRandom () {
      return (Math.floor(Math.random() * (100 - 1)) + 1);
  }

  function getUserSelectedNumber () {
      return Number(document.getElementById('randNumberInput').value);
  }

  function setResult(result) {
      document.getElementById('result').innerHTML = result;
  }

  function error () {
      return "Please introduce an integer";
  }
  function bigger () {
      return "The random is bigger";
  }

  function smaller () {
      return "The random is smaller";
  }

  function win () {
      return "YOU WIN!!!";
  }

  var randomNumber;

  function onClick(){
      setResult(compareNumbers(randomNumber, getUserSelectedNumber()));
  }

  function start() {
      randomNumber = getRandom();
      var comparisonTrigger = document.getElementById("compare-numbers-button");
      comparisonTrigger.addEventListener("click", onClick);
  }


  return {
      compareNumbers: compareNumbers,
      getRandom: getRandom, 
      start: start,
      error: error,
      smaller: smaller,
      bigger: bigger,
      win: win
  }
}