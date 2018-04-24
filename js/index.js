function compareNumbers (randNumber) {
  const inputNumber = getInputNumber();
  if (inputNumber === "") {
    setError(error());
  } else {
      if (randNumber > inputNumber) {
        setResult(bigger());
    }
      else if (randNumber < inputNumber) {
        setResult(smaller());
    }
      else {
        setResult(win());
      }
  }
  
}

function getRandom (event) {
  return (Math.floor(Math.random() * (100 - 1)) + 1);
}

function getInputNumber () {
  return Number(document.getElementById('randNumberInput').value);
}


function setResult(result) {
  document.getElementById('result').innerHTML = result;
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

function setError (error) {
  document.getElementById('error').innerHTML = error;
}

function error () {
  return "Error, introduce un número";
}

function start() {
  var randomNumber = getRandom();
  var comparisonTrigger = document.getElementById("compare-numbers-button");
  comparisonTrigger.addEventListener("click", function(event){
    event.preventDefault();  
    compareNumbers(randomNumber);
  });
}