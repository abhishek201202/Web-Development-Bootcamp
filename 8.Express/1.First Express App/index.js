const express = require("express")
const app = express()
// console.dir(app)

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST")
    // console.dir(request)
    // res.send("HELLO, WE GOT YOUR REQUEST!!!")
    // res.send({color: "red"})
    res.send("<h1>This is my WebPage</h1>")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})



