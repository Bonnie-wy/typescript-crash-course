"use strict";
// Basic types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", true];
// Tuple array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"]
];
// Union
let pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
brad.id = 5;
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
// current this will push into the numArray as the type is any
numArray.push("hello");
// add a generic
function getArray2(items) {
    return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(["brad", "John", "Jill"]);
// this will give an error because it's expecting a number
// numArray2.push("hello")
