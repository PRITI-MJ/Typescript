let greetings: string = "hello Priti";
greetings.toLowerCase();
console.log(greetings);


//we don't have to use colon everytime , even we don't use it , typescript will able to detect it

//number
let userId = 335555.3
userId.toFixed();

//boolean
let isLoggedIn: boolean = false;


//any
let hero;

function getHero(){
    return "thor"
}

hero = getHero()
export {}