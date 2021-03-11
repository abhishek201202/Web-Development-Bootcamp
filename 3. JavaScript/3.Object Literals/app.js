const person = {
    firstName : "Abhishek", 
    lastName : "Soni"
};
console.log(person)


const kitchen = {
    favNum : 201202, 
    isFunny : true,
    colors : ["red", "blue"]
}

console.log(kitchen)



// Accessing name
console.log(person["firstName"])
console.log(person.firstName)



const years = {
    1999 : "Good",
    2020 : "BAD"
}

console.log(years["1999"])
// console.log(years.1999) ERROR


// Updating
const midTerms = {
    abhi : 100,
    dhruv : 98
}
midTerms.dhruv = 99
console.log(midTerms)
midTerms.devu = 97
console.log(midTerms)



// Array and Object
const comments = [
    {
        username : "abhi",
        text : "lololo",
        votes : 9
    },
    {
        username : "anam",
        text : "darpokk",
        votes : 3000
    }
]
console.log(comments)

console.log(comments[1].text)