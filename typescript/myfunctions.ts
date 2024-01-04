//type annotation is not so compulsory for variables but in case of functions it is necessary


function addTwo(num: number) :number //this type notation is givven so that we can return only a number value and not a string value
{
    return num + 2
    //return "hello" (ts will throw error)
}

//if we want to do this using arrow functions
const addTwoNum = (s: number): number => {
    return 2;
}

function getUpper(val: string)
{
    return val.toUpperCase();
}

addTwo(5);
getUpper("hello");


function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Priti", "priti@mail.com", false);

let loginUser = (name: string, email:string, isPaid: boolean = false) => {}

loginUser("Priti", "priti@abc.com", true);



//but it will create a great problem if we want to return two types of values
// let user =(): boolean => {
//     if(true)
//         return true;
//     return "hello"
// }

const heros = ["thor", "spiderman", "ironman"]

//for better practice if we mention the datatype of return type of hero
heros.map((hero): string => {
    return `hero is ${hero}` 
})

//as this function is not returning any value , so its better to mention it as "void"
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//as this function is not just printing the errmsg , rather it handling the error , we use "never over here"
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export{}