// Variables Setup
let btn = document.getElementById("btn");
let output = document.getElementById("outputText");

// Random number generator (*100= a number between 1-100)
let number = [Math.floor(Math.random()*100)]

let attempts = 0;
const maxAttempts = 10;

// Function to submit guess 
btn.addEventListener('click', function() {
    // Should start with the main condition -> Attempts; and put the others inside it
    if (attempts < maxAttempts) {
        let input = document.getElementById('userInput').value;
        attempts++;
        // Conditions of Number guesses
        if (input == number) {
            output.innerHTML = `Correct it was ${number}`;
            
        } else if (input < number){
            output.innerHTML = `You guessed too low. Attempts left: ${maxAttempts - attempts}`;
        } else {
            output.innerHTML = `You guessed too high. Attempts left: ${maxAttempts - attempts}`;
        } 
        // Condition for when max attempts are achieved + disabling button
        if (attempts === maxAttempts) {
            output.innerHTML = "Maximum number of attempts has been reached... " + `The number was ${number}`
            btn.disabled = true
        }
    }
});
