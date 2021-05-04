console.log("Sending request ot server!!")
setTimeout(() =>{
    console.log("Here is your data from the server...")
}, 3000)

setTimeout(() =>{
    console.log("Here is your data from the server....")
}, 2000)
console.log("I AM AT THE END OF THE FILE")




// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'yellow';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'pink';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('blue', 1000, () => {
        delayedColorChange('green', 1000, () => {
            delayedColorChange('yellow', 1000, () => {
                delayedColorChange('pink', 1000, () => {
    
                })
            })
        })
    })
})


// some application of this technique


/*
searchMoviesAPI('amadeus', () => {
    saveToMyDB('movies', () => {
        // if it works, run this
    }, () => {
        // if it doesn't work, run this
    })
}, () => {
    // if API is down, or request failed
})


*/