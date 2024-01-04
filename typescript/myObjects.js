"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "priti",
    email: "priti@abc.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "priti", isPaid: true });
var newUser = { name: "priti", isPaid: true, email: "abc@abc.com" };
function createNewUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createNewUser(newUser);
//function that returns a object
function createCourse(_a) {
    var string = _a.name, number = _a.price;
    return { name: "reactjs", price: 399 };
}
