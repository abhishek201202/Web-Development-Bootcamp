const express = require("express");
const app = express();
const path = require("path")
const redditData = require("./data.json")




// to use css and js code on client side 
app.use(express.static(path.join(__dirname, "public")))


// views is the default directory
app.set("view engine", "ejs")
// server only runs when we run it from the directory where the view is present 
// by setting the views , we can run it from any directory
app.set("views", path.join(__dirname, "/views"))




app.get("/", (req, res) => {
    // res.send("HI")
    res.render("home.ejs")
})

app.get("/cats", (req, res) => {
    const cats = [
        "blue", "rocket", "monty", "stephanie", "winston"
    ]
    res.render("cats", {cats})
})


app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit]
    if(data){
        res.render("subreddit", {...data})
    }else{
        res.render("notfound", {subreddit})
    }
})




app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    // 1st method
    res.render("random.ejs", {rand : num})
    // 2nd method
    // res.render("random.ejs", {num})
})





app.listen(3000, () => {
    console.log("LISTENING ON PRT 3000")
})



