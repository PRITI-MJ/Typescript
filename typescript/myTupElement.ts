//in array the order is not mattered but in tuples order matters
let User: [string, number, boolean]

User = ["pm", 131, true]

//in this way it is restricted to only the number of values , we cannot add one 
let rgb: [number, number, number] = [255, 255, 255]

//if we want to add then we have to use push() function of only the given datatypes
rgb.push(0.6);//allowed(contradictory)

type User = [number, string]

const newUser: User = [112, "hello@abc.com"]

//we can also change the values
newUser[1] = "pm.com";
// add values to it 
newUser.push("heelo");



