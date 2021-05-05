const express = require("express")
const app = express()
// console.dir(app)


/*
// this match for every single request 
app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST")
    // console.dir(request)
    // res.send("HELLO, WE GOT YOUR REQUEST!!!")
    // res.send({color: "red"})
    res.send("<h1>This is my WebPage</h1>")
})
*/


app.get('/', (req, res) => {
    res.send("This is the Home Page")
})


app.get('/r/:subreddit',  (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})


app.get('/r/:subreddit/:postId',  (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the PostId : ${postId} on the ${subreddit} subreddit</h1>`)
})


// app.get('/cats', (req, res) => {
//     res.send("MEOW!!!")
// })


// app.get('/dogs', (req, res) => {
//     res.send("WOOF!!!")
// })


app.post('/cats', (req, res) => {
    res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!!!")
})



// all the get function below this will 
// automatically ignored
// app.get('*', (req, res) => {
//     res.send("I DON'T KNOW THAT PATH!!!")
// })









// /cats => meow
// /dogs => woof
// '/' => welcome to home page


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})



