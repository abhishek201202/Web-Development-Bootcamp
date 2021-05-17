/* ======================
npm install cookie-parser
====================== */

const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")


app.use(cookieParser("thisismysecret"))



app.get("/greet", (req, res) => {
    const {name = "No-name"} = req.cookies
    res.send(`HEY THERE, ${name}`)
})

app.get("/setname", (req, res) => {
    res.cookie("name", "abhishek")
    res.cookie("animal", "dog")
    res.send("OK SENT YOU A COOKIE")
})


app.get("/getsignedcookie", (req, res) => {
    res.cookie("fruit", "grape", {signed: true})
    res.send("OK SEND YOUR SIGNED COOKIE!!!")
})

app.get("/verifyfruit", (req, res) => {
    res.send(req.signedCookies)
})


app.listen(3000, () => {
    console.log("SERVING")
})



















