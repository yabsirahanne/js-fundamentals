const args = process.argv.slice(2);
const num = Number(args[0]);

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}