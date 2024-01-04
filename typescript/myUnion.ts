//we can enter both the number and string values in a single variable
let score: number | string = 33;

score = 44;

score = "55";

type User = {
    name: string;
    _id: number
}

type Admin = {
    name: string;
    _id: number
}

let priti: User | Admin = {name: "priti", _id:334}

//we can also change the values using "|"
priti = {name:"pm", _id:334}


function getDbId(id: number | string){
    // Id.toLowerCase() (it will throw error)
    //for this we need to use conditions
    if(typeof id === "string")
        id.toLowerCase()

    if(typeof id === "number")
        id + 2;
}

getDbId(3)
getDbId("3")




//array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] | boolean[] = ["1", "2", "3"] //but all the values should be either string or number or boolean together .
//eg: [1, 2, 3, "1" , true] //not allowed
//for this we use 
const data4: (string | number | boolean)[] = ["1", "2", "3", 3, true] //there are no restrictions about the positions of the values(orders are not restricted)

//if we want to fix one value
let pi:3.14 = 3.14
//pi = 3.145 (we cannot change the value of pi)

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"(different values not allowed)


export{}