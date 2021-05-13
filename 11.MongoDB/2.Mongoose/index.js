const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPENED !!!")
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!!")
        console.log(err)
    })


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("CONNECTION OPEN !!!")
// });


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model("Movie", movieSchema)



/*Insert============================================================
===================================================================*/
const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"})
amadeus.save()

Movie.insertMany([
    {title: "Amelie", year: 2000, score: 8.3, rating: "R"},
    {title: "Alien", year: 1979, score: 8.1, rating: "R"},
    {title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG"},
    {title: "Stand By Me", year: 1986, score: 8.6, rating: "R"},
    {title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13"}
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data)
    })




/* Find in the database =======================================
==============================================================*/
Movie.find({}).then(data => console.log(data))
Movie.find({rating: "PG-13"}).then(data => console.log(data))
Movie.find({year: {$gte: 2010}}).then(data => console.log(data))
Movie.findOne({}).then(m => console.log(m))
Movie.findById("609b829d7781f5196899938e").then(m => console.log(m))






/*Updating in the database==========================================
================================================================= */
Movie.updateOne({title: "Amadeus"}, {year: 1984}).then(res => console.log(res))
Movie.updateMany({title: {$in: ["Amadeus", "Stand By Me"]}}, {score: 10}).then(res => console.log(res))
Movie.findOneAndUpdate({title: "The Iron Giant"}, {score: 7.0}, {new: true}).then(m => console.log(m))






/*Deleting in the database==========================================
================================================================= */


Movie.remove({title: "Amadeus"}).then(msg => console.log(msg))
Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))
Movie.findOneAndDelete({title: "Alien"}).then(m => console.log(m))




