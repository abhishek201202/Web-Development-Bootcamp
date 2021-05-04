const fakeRequestCallback = (url, success, failure) =>{
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('Connection Timeout :(')
        }else{
            success(`Here is your is fake data ${url}`)
        }
    }, delay);
}


fakeRequestCallback('books.com/page1', function(response){
    console.log("IT WORKED!!!!")
    console.log(response);
    fakeRequestCallback('books.com/page2', function(response){
        console.log("IT WORKED AGAIN!!!!")
        console.log(response);
        fakeRequestCallback('books.com/page3', function(response){
            console.log("IT WORKED AGAIN thrice!!!!")
            console.log(response);
        }, function(err){
            console.log("ERROR for 3rd request!!!!", err)
        })
    }, function(err){
        console.log("ERROR for 2nd request!!!!", err)
    })
}, function(err){
    console.log("ERROR for 1st request!!!!", err)
})

