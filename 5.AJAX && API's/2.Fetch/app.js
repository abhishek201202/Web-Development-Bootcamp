fetch('https://api.cryptonator.com/api/ticker/btc-usd').then((res) => {
    console.log("RESPONSE, WAITING TO PARSE...", res)
    return res.json();
}).then((data) => {
    console.log("DATA PARSED...", data)
    console.log(data.ticker.price)
}).catch((err) => {
    console.log("OH NO! ERROR!", err)
})

const fetchBitcoinPrice = async() => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price);
    }catch(err){
        console.log("SOMETHING WENT WRONG", err)
    }
   
}

fetchBitcoinPrice();




