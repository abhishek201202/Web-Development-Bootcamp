const express = require("express")
const app = express();

// use to parse the payload of incoming request 
app.use(express.urlencoded({ extended: true}))
// for json data 
app.use(express.json())


app.get("/tacos", (req, res) => {
    res.send("GET / tacos response")
})

app.post("/tacos", (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Ok, here are your ${qty} ${meat}`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})