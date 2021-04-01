axios.get('https://api.cryptonator.com/api/ticker/btc-usd').then((res) => {
    console.log(res.data.ticker.price)
}).catch(err => {
    console.log("ERROR !!", err)
})


const fetchBitcoinPrice = async() => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price)
    }catch(err){
        console.log("ERROR!!", err)
    }
}

const jokes = document.querySelector('#jokes')


const getDadJoke = async() => {
    try{
        const config = {
            headers: {Accept: 'application/json'}
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }catch(err){
        console.log("NO JOKE AVAILABLE SORRY!!!", err)
    }
    
}


const button = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI')
    newLI.append(jokeText);
    jokes.append(newLI)
}
button.addEventListener('click', addNewJoke)


