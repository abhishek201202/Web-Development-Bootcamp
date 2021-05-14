const express = require("express")
const app = express()
const morgan = require("morgan")

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
    }else{
        res.send("SORRY YOU NEED A PASSWORD!!!")   
    }
}



// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE")
//     return next()
//     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE")
//     return next()
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE")
//     return next()
// })



app.get("/", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("HOME PAGE!!!")
})

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("WOOF WOOF!!!")
})


app.get("/secret", verifyPassword, (req, res) => {
    res.send("I LOVE CP")
})


app.use((req, res) => {
    res.status(404).send("NOT FOUND!!!")
})


app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})






