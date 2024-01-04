//type aliaces

type User = {
    name: string;
    email: string;
    isActive: boolean
}

//here we are mentioning if anyone passed me a user it should adhere to the type of "User"
function createUser(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})

export{}