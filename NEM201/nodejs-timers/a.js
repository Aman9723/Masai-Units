function add(a, b) {
    print('add called');
    return a + b;
}

function sub(a, b) {
    print('sub called');
    return a - b;
}

function print(string) {
    console.log(string);
}

function calculator(operation, op1, op2) {
    if (operation == 'add') {
        return add(op1, op2);
    }

    if (operation == 'sub') {
        return sub(op1, op2);
    }
}

calculator('add', 2, 2);
calculator('sub', 2, 2);

console.log('before');

setTimeout(function timer() {
    console.log('inside');
}, 0);  // at least 1000ms.

console.log('after');
