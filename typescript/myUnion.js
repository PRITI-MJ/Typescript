"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//we can enter both the number and string values in a single variable
var score = 33;
score = 44;
score = "55";
var priti = { name: "priti", _id: 334 };
//we can also change the values using "|"
priti = { name: "pm", _id: 334 };
function getDbId(id) {
    // Id.toLowerCase() (it will throw error)
    //for this we need to use conditions
    if (typeof id === "string")
        id.toLowerCase();
    if (typeof id === "number")
        id + 2;
}
getDbId(3);
getDbId("3");
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"]; //but all the values should be either string or number or boolean together .
//eg: [1, 2, 3, "1" , true] //not allowed
//for this we use 
var data4 = ["1", "2", "3", 3, true]; //there are no restrictions about the positions of the values(orders are not restricted)
//if we want to fix one value
var pi = 3.14;
//pi = 3.145 (we cannot change the value of pi)
var seatAllotment;
seatAllotment = "aisle";
