const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPENED !!!")
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!!")
        console.log(err)
    })



const personSchema = new mongoose.Schema({
    first: String, 
    last: String
})


/* Virtuals Method=========================================
=========================================================*/
personSchema.virtual("fullName").get(function(){
    return `${this.first} ${this.last}`
})
/* ======================================================== */




/* Middleware Function=========================================
=========================================================*/
personSchema.pre("save", async function (){
    console.log("ABOUT TO SAVE!!!")
})
personSchema.post("save", async function(){
    console.log("JUST SAVED!!!")
})
/* ======================================================== */










const Person = mongoose.model("Person", personSchema)

const Abhishek = new Person({first: "abhishek", last: "soni"})
Abhishek.save()

const Goku = new Person({first: "Goku", last: "DBZ"})
Goku.save()


Person.find({first: "abhishek"}).then(msg => console.log(msg))

console.log(Abhishek.fullName)
