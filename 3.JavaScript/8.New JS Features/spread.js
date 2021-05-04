console.log(Math.max(1, 2, 3, 4,4 ,5, 5,6, 660))

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a)
console.log(...a)
console.log(Math.max(...a))


console.log("abhishek")
console.log(..."abhishek")



// spread on array literals
const cats = ["a", "b", "c"]
const dogs = ["d", "e", "f"]
const allPets = [...cats, ...dogs]
console.log(allPets)



// spread on object literals
const feline = { legs: 4, family: "falidae"};
const canine = { isFurry: true, family: "Caninae"};
const catDog = {...feline, ...canine};
console.log(catDog)
// first family will initialise with falidae and
// then it will overwrite with canidae



// spred on array (converting array into object)
const b = {...a} // indeces are key
console.log(b)


const dataForm = {
    email : "abhsih@gamil.com",
    password: "asdfds",
    username: "abhsiheklmldjso"
}
const newUser = {...dataForm, id : 2345, isAdmin: false};
console.log(newUser)
