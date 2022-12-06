function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// schedule the tasks and go on further
let t1 = new Promise((res) => res(add(1, 2))); // V8 thread 1
let t2 = new Promise((res) => res(sub(2, 1))); // V8 thread 2

console.log('waiting...');
// code execution is done by V8 engine
