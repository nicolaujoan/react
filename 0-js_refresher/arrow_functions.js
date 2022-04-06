// quick examples about arrow functions

function printName(name) {
    console.log(`your name is ${name}`);
}

// now we do it with an arrow function
const printaNom = nom => {
    console.log(`your name is ${nom}`);
}

// if we just wanna return something
const multiplication = (num1, num2) => num1 * num2;

printName("joan");
printaNom("pere");
console.log(multiplication(2, 2));