// async function hello(){

// }

const sing = async() => {
    throw "OH NO, PROBLEM!" // to reject the promise
    return "LA LA LA LA" // to resolve the promise
}

sing().then((data) => {
    console.log("PROMISE RESOLVED WITH:", data)
}).catch((err) => {
    console.log("OH NO, PROBLEM REJECTED")
    console.log(err)
})



const login = async(username, password) => {
    if(!username || !password) throw "Missing Credentials";
    if(password === 'abhishekk201202') return 'WELCOME!'
    throw 'Invalid Password'
}

login('abhishek', 'fdjnf').then((msg) => {
    console.log("LOGGED IN!")
    console.log("msg")
}).catch((err) => {
    console.log("ERROR!")
    console.log(err)
})