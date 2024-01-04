const superHeros: string[] = []
//const heroPower: number[] = []
//we can also use it using different syntax
const heroPower: Array<number> = []

//if we want to define numbers and boolean value together


superHeros.push("spiderman");
heroPower.push(2);


//if we want to define numbers and boolean value together
type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name: "priti", isActive: true})

export{}

//if we want to push rows and columns from python 
const MLModels: number[][] = [
    [255, 255, 255],
    [1, 2, 3]
]