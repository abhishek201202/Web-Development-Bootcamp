const express = require("express")
const app = express()
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})


app.get('/', (req, res) => {
    res.send("WelCome to the Home Page")
})


app.get('/r/:subreddit',  (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})


app.get('/r/:subreddit/:postId',  (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the PostId : ${postId} on the ${subreddit} subreddit</h1>`)
})


app.post('/cats', (req, res) => {
    res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!!!")
})


app.get('/search', (req, res) => {
    const { q } = req.query
    if(!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})




app.get("*", (req, res) => {
    res.send("I don't know that path!!")
})






