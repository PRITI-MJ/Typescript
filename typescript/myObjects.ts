const User = {
     name: "priti",
     email: "priti@abc.com",
     isActive: true
}

function createUser({name: string, isPaid:boolean}){}

createUser({name: "priti", isPaid: true})


//so in this way we can pass much more information than what is expected in the function definition
const newUser = {name: "priti", isPaid: true, email: "abc@abc.com"}
function createNewUser({name: string, isPaid:boolean}){}

createNewUser(newUser);


//function that returns a object
function createCourse({name: string, price: number})
{
    return {name: "reactjs", price: 399}
}

export {}