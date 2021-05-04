// only work when there is only line of code
const add = (a, b) => (
    a + b
)

const isEven = (a) => a%2 === 0;


const movies = [
    {
        title: "abhsif",
        score: 99
    },
    {
        title: "dsfds",
        score: 42
    }
]

const newMovies = movies.map(function(movie){
    return `${movie.title} - ${movie.score / 10}`;
})
console.log(newMovies)

const newMovies2 = movies.map((movie) =>(
    `${movie.title} - ${movie.score / 10}`
))
console.log(newMovies2)