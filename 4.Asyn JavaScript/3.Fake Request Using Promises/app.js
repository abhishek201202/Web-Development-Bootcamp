
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject('Connection Timeout :(')
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}



// 1st Method
fakeRequestPromise('yelp.com/api/coffee/page1').then(() => {
    console.log("PROMISE RESOLVED")
    console.log("IT WORED!!!")
    fakeRequestPromise('yelp.com/api/coffee/page2').then(() => {
        console.log("PROMISE RESOLVED for 2nd apge")
        console.log("IT WORKED for 2nd page!!!")
        fakeRequestPromise('yelp.com/api/coffee/page3').then(() => {
            console.log("PROMISE RESOLVED for 3rd apge")
            console.log("IT WORKED for 3rd page!!!")
        }).catch(() => {
            console.log("PROMISE REJECTED for 3rd page")
            console.log("OH NO, ERROR for 3rd page!!!")
        })
    }).catch(() => {
        console.log("PROMISE REJECTED for 2nd page")
        console.log("OH NO, ERROR for 2nd page!!!")
    })
}).catch(() => {
    console.log("PROMISE REJECTED")
    console.log("OH NO, ERROR!!!")
})



// 2nd Method
fakeRequestPromise('yelp.com/api/coffee/page1').then((data) => {
    console.log("IT WORKED!!!!! (page 1)")
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffee/page2')
}).then((data) => {
    console.log("IT WORKED!!!!! (page 2)")
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffee/page3')
}).then((data) => {
    console.log("IT WORKED!!!!! (page 3)")
    console.log(data)
}).catch((err) => {
    console.log("OH NO, A REQUEST FAILED!!!!")
    console.log(err)
})




