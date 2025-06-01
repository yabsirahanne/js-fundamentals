const args = process.argv.slice(2);
const x = parseInt(args[0], 10);

if (Number.isInteger(x)) {
    let output = "";
    for (let i = 0; i < x; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
} else {
    console.log("Missing number of occurrences");
}