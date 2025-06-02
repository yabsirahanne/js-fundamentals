const args = process.argv.slice(2);
const size = parseInt(args[0], 10);

if (Number.isInteger(size)) {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
} else {
    console.log("Missing size");
}