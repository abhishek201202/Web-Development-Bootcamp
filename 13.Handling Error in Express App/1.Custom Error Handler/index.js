const express = require("express")
const app = express()
const morgan = require("morgan")
const AppError = require("./AppError")
/* ===============================
use run for every incoming request
=============================== */

app.use(morgan("tiny"))

app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})


app.use("/dogs", (req, res, next) => {
    console.log("I LOVE DOGS!!!")
    next()
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query
    if(password === "chickennuget"){
        next()
    }
    // res.send("SORRY YOU NEED A PASSWORD!!!")
    throw new AppError("Password Required", 401)   
}


app.get("/", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("HOME PAGE!!!")
})

app.get("/error", (req, res) => {
    chicken.fly()
})

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("WOOF WOOF!!!")
})


app.get("/secret", verifyPassword, (req, res) => {
    res.send("I LOVE CP")
})


app.get("/admin", (req, res) => {
    throw new AppError("You are not an Admin!!!", 403)
})





app.use((req, res) => {
    res.status(404).send("NOT FOUND!!!")
})

// app.use((err, req, res, next) => {
//     console.log("*****************************************")
//     console.log("************ERROR************************")
//     console.log("*****************************************")
//     // res.status(500).send("OH BOY, WE GOT AN ERROR!!!")
//     // next() // next non error handling middleware 
//     next(err) // next non error handling middleware 
// })


app.use((err, req, res, next) => {
    // default value is given for error like syntax error
    const {status = 500, message = "Something Went Wrong"} = err 
    res.status(status).send(message)
})



app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})






