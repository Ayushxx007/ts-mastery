"use strict";
//generics
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));
console.log(getFirst([true, false, true]));
const x = (value) => {
    return value;
};
x(123);
x("hello");
x(true);
const response = {
    success: true,
    message: "success",
    data: "data"
};
const response2 = {
    success: true,
    message: "success",
    data: 123
};
function getId(val) {
    return val.id;
}
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    get size() {
        return this.items.length;
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.pop(); // returns number
const stringStack = new Stack();
stringStack.push("hello");
// stringStack.push(42); // ERROR — T is string here
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: "Ayush", age: 25 };
getProperty(user, "name"); // returns string ✅
getProperty(user, "age"); // returns number ✅
//getProperty(user, "email"); // ❌ ERROR — 'email' not in user
