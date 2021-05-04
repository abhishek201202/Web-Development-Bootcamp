const a = [1, 2, 3, 4, 5, 6]

a.forEach(function(num){
    console.log(num);
})


const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand ByMode",
        score: 85
    }
]
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score} / 100`)
})