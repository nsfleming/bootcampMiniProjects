let maximum = parseInt(prompt("Enter your number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}


const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter new guess"))
    } else {
        guess = parseInt(prompt("Too low! Enter a new guuess"))
    }
}
console.log("You got it")

