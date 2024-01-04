"use strict";
//type annotation is not so compulsory for variables but in case of functions it is necessary
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "hello" (ts will throw error)
}
//if we want to do this using arrow functions
var addTwoNum = function (s) {
    return 2;
};
function getUpper(val) {
    return val.toUpperCase();
}
addTwo(5);
getUpper("hello");
function signUpUser(name, email, isPaid) { }
signUpUser("Priti", "priti@mail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Priti", "priti@abc.com", true);
//but it will create a great problem if we want to return two types of values
// let user =(): boolean => {
//     if(true)
//         return true;
//     return "hello"
// }
var heros = ["thor", "spiderman", "ironman"];
//for better practice if we mention the datatype of return type of hero
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//as this function is not returning any value , so its better to mention it as "void"
function consoleError(errmsg) {
    console.log(errmsg);
}
//as this function is not just printing the errmsg , rather it handling the error , we use "never over here"
function handleError(errmsg) {
    throw new Error(errmsg);
}
