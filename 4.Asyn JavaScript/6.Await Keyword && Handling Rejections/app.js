const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE"
}
async function printRainbow(){
    await rainbow()
    console.log("END OF RAINBOW")
}

// printRainbow();



const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 2000){
                reject('Connection Timeout :(')
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}

async function maketwoRequests(){
    try{
        let data1 = await fakeRequestPromise('/page1')
        console.log(data1)
        let data2 = await fakeRequestPromise('/page2')
        console.log(data2)
    }catch(e){
        console.log("CAUGHT THE ERROR!!!")
        console.log("error is:", e)
    }
}

maketwoRequests();
