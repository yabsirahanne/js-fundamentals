function add(a, b) {
  console.log(a + b);
}

const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

add(arg1, arg2);