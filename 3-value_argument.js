const args = process.argv.slice(2);
const firstArg = args.shift(); // Extracts the first argument without using length

console.log(firstArg ? firstArg : "No argument");