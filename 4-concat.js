const args = process.argv.slice(2);
const num = Number(args[0]);

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
const args = process.argv.slice(2);

if (args.length >= 2) {
    console.log(`${args[0]} is ${args[1]}`);
} else {
    console.log("Not enough arguments");
}