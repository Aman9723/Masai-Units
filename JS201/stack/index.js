class Stack {
    constructor() {
        this.length = 0;
        this.stack = [];    //stack is an array internally
    }
    push(...n) {
        this.stack.push(...n);
        this.length = this.stack.length;
        return this.stack;
    }
    remove() {
        this.length--;
        return this.stack.pop();
    }
}

let stack1 = new Stack();
stack1.push(2, 4);
stack1.remove();
console.log(stack1);
