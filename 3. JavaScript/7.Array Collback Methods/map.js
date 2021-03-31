const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubles = a.map(function(num){
    return num * 2;
})
console.log(doubles)


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

const title = movies.map(function(movie){
    return movie.title;
})
console.log(title);