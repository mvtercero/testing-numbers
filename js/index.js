var numbers = {
  randomize: function () {
      return (Math.floor(Math.random() * (100 - 1)) + 1);
  }
};

function getApplication(randomize) {
  var randomFunction = randomize;
  if (typeof(randomize) != 'function') {
      randomFunction = randomizeDefault;
  }

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

  function randomizeDefault () {
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

  function start() {
      var randomNumber = randomFunction();
      var comparisonTrigger = document.getElementById("compare-numbers-button");
      comparisonTrigger.addEventListener("click", function (){
          setResult(compareNumbers(randomNumber, getUserSelectedNumber()))});
  }

  return {
      compareNumbers: compareNumbers,
      start: start,
      error: error,
      smaller: smaller,
      bigger: bigger,
      win: win
  }
};