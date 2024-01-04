type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number 
    //"?" is only used when it is not essential  to put the value of a particular variable
}

let myUser: User = {
    _id: "1234",
    name:"priti",
    email:"priti@gmail.com",
    isActive: true
}

//we can also modify the values except the "_id"
myUser.email = "p@abc.com";
//myUser._id = "avc" (it will throw error as it is declared as readonly)

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

//we can combine all this types together by "&" and even we can add a new one too
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export{}