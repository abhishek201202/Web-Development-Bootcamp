const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
const lis = document.querySelectorAll('li')

// only for old lis
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }

tweetForm.addEventListener('submit', function(e){
    const username = document.querySelectorAll('input')[0];
    const tweetInput = document.querySelectorAll('input')[1];
    console.log(username.value, tweetInput.value)
    alert("SUBMITTED")
    e.preventDefault();
})

tweetForm.addEventListener('submit', function(e){
    const usernameInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = ""
    tweetInput.value = ""
    e.preventDefault(); // no request is made due to this
})


const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`--${tweet}`)
    console.log(newTweet)
    tweetsContainer.append(newTweet);
}




tweetsContainer.addEventListener('click', function(e){
    console.log("CLICKED ON UL!!")
    e.target.remove();
})
