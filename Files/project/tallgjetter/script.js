let number = Math.floor(Math.random() * 100) + 1;

let inputBox = document.getElementById("numberBox");

let enterButton = document.getElementById("enterAnsBox");

let result = document.getElementById("answerBox");

let wrongList = document.getElementById("wrongGuesses");

let resetButton = document.getElementById("resetButton");

let main = document.getElementById("body");

let fargeButton = document.getElementById("skiftfargegreier");

let guessedNum = "";

let nGuesses = 0;

function updateDisplay(){
    inputBox.innerText = guessedNum;
}

function getAns(){
    console.log(number);
}

function getRandNum256(){
    return Math.floor(Math.random() * 255)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function takeGuess(){
    if (guessedNum.length > 0){
        nGuesses += 1;
        if (guessedNum*1 < number){
            result.innerText = guessedNum + " is lower than the number";
            wrongList.innerHTML = '<div class="wrongGuess toLow">' + guessedNum.toString() + '</div>' + wrongList.innerHTML;
            
        }
        else if (guessedNum*1 > number){
            result.innerText = guessedNum + " is higher than the number";
            wrongList.innerHTML = '<div class="wrongGuess toHigh">' + guessedNum.toString() + '</div>' + wrongList.innerHTML;
    
        }
        else{
            result.innerText = number + " is correct! Congratulations, you guessed it in " + nGuesses.toString() + " guesses!";
            wrongList.innerHTML = '<div class="wrongGuess correct">' + guessedNum.toString() + '</div>' + wrongList.innerHTML;
        }
        guessedNum = "";
        updateDisplay();
    }
}

enterButton.addEventListener("click", takeGuess);
resetButton.addEventListener("click", function(){
    window.location.reload();
});

fargeButton.addEventListener("click", async function(){
    for (let i = 0; i<1000; i++){
        await sleep(10);
        main.style.backgroundColor = "rgb(" + getRandNum256().toString() + "," + getRandNum256().toString() + "," + getRandNum256().toString() +")";
        
    }
    main.style.backgroundColor = "white";
});


//Ta inputs fra keyboard
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    
    if (guessedNum.length < 2 && ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(event.key, 0)){
        guessedNum += event.key;
    }

    if (event.key == "Backspace" && guessedNum.length > 0){
        guessedNum = guessedNum.slice(0, guessedNum.length - 1);
    }

    if (event.key == "Enter"){
        takeGuess();
    }
    
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
    updateDisplay(); 
    
  }, true);

