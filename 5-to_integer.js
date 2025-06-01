const args = process.argv.slice(2);
const num = parseInt(args[0], 10);
console.log(Number.isInteger(num) ? `My number: ${num}` : "Not a number");