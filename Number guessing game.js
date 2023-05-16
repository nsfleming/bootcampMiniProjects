let maximum = parseInt(prompt("Enter your number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}


const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("too high enter new guess");
    } else {
        guess = prompt("too low! enter a new guuess");
    }
}

console.log(`You got it! It took you ${attempts} attempts`)

