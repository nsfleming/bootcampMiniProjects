let maximum = parseInt(prompt("Enter your number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}


const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter new guess");
    } else {
        guess = prompt("Too low! Enter a new guuess");
    }
}

if (guess === 'q') {
    console.log("OK, QUITTING NOW!")
} else {
    console.log("CONGRATS YOU WIN")
    console.log(`You got it! It took you ${attempts} attempts`)
}



