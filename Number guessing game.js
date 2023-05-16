let maximum = parseInt(prompt("Enter your number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}


const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess (Type 'q' to quit )"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter new guess");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guuess");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("OK, QUITTING NOW!")
} else {
    console.log("CONGRATS YOU WIN")
    console.log(`You got it! It took you ${attempts} attempts`)
}



