const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')


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





