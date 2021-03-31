// destructing array
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [gold, silver] = [a[0], a[1]]
console.log(gold, silver)

const [x, y, ...z] = a;
console.log(x, y, z)



// destructring object
const user = {
    email: "abhid@gmail.com",
    password: "dknflenf",
    firstName: "abhishek",
    lastName: "soni",
    born: "1998"
}

const {firstName, lastName, email, born} = user
console.log(firstName, lastName, email, born)


const {born: birthYear, grandmaster = "2000+"} = user;
console.log(birthYear, grandmaster)




// destructring params
function fullName(user){
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`;
    // return `${user.firstName} ${user.lastName}`
}
console.log(fullName(user));

function fullName2({firstName, lastName}){
    return `${firstName} ${lastName}`;
    // return `${user.firstName} ${user.lastName}`
}
console.log(fullName2(user));






