// to install a package globally use -g flag

const jokes = require("give-me-a-joke")
console.log(jokes)

jokes.getRandomDadJoke (function(joke) {
    console.log(joke);
});
 