const add = (a, b) => a + b;

const args = process.argv.slice(2);
const num1 = parseInt(args[0], 10);
const num2 = parseInt(args[1], 10);

console.log(Number.isInteger(num1) && Number.isInteger(num2) ? add(num1, num2) : "Invalid input");
rev