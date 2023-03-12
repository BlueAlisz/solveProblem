var MyStack = /** @class */ (function () {
    function MyStack() {
        this.queue = [];
        this.topElement = undefined;
    }
    MyStack.prototype.push = function (x) {
        this.queue.push(x);
        this.topElement = x;
    };
    MyStack.prototype.pop = function () {
        var size = this.queue.length;
        for (var i = 0; i < size - 1; i++) {
            var element = this.queue.shift();
            if (element !== undefined) {
                this.queue.push(element);
                this.topElement = element;
            }
        }
        return this.queue.shift();
    };
    MyStack.prototype.top = function () {
        return this.topElement;
    };
    MyStack.prototype.empty = function () {
        return this.topElement === undefined;
    };
    return MyStack;
}());
var stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.top()); // Output: 3
console.log(stack.pop()); // Output: 3
// console.log(stack.empty()); // Output: false
// console.log(stack.pop()); // Output: 2
// console.log(stack.pop()); // Output: 1
// console.log(stack.empty()); // Output: true
