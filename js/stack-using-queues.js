class MyStack {
    constructor() {
        this.queue = [];
        this.topElement = undefined;
    }
    push(x) {
        this.queue.push(x);
        this.topElement = x;
    }
    pop() {
        const size = this.queue.length;
        for (let i = 0; i < size - 1; i++) {
            const element = this.queue.shift();
            if (element !== undefined) {
                this.queue.push(element);
                this.topElement = element;
            }
        }
        return this.queue.shift();
    }
    top() {
        return this.topElement;
    }
    empty() {
        return this.topElement === undefined;
    }
}
const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.top()); // Output: 3
console.log(stack.pop()); // Output: 3
// console.log(stack.empty()); // Output: false
// console.log(stack.pop()); // Output: 2
// console.log(stack.pop()); // Output: 1
// console.log(stack.empty()); // Output: true
