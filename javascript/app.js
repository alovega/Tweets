//variables
const tweetList = document.getElementById('tweet-list')

//eventlisteners
eventlisteners();
function eventlisteners(){
    //form submission
    document.querySelector('#form').addEventListener('submit', myTweet);

    //remove any tweet
    tweetList.addEventListener('click', removeTweet);

    //adds values in the localstorage to the respective DOM
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

//functions

function myTweet(e){
    e.preventDefault()
    //reads textsarea value
    const tweet = document.getElementById('tweet').value;

    //create a new button Element
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create a new list element
    const li = document.createElement('li');
    li.textContent = tweet;
    // add remove button to my list element
    li.appendChild(removeBtn);

    //append my list to a do element
    tweetList.appendChild(li);

    //add my tweets to the localStorage
    addTweetsToLocalStorage(tweet);
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
}

function addTweetsToLocalStorage(tweet){
    let tweets = getTweetsFromLocalStorage();
    console.log(tweets);

    //add  tweets to the local storage
    tweets.push(tweet);

    //convert the array into a string
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromLocalStorage(){
    let tweets;
    const tweetLs = localStorage.getItem('tweets');
    //get items if null returns an empty array;
    if (tweetLs === null){
        tweets = [];
    }
    else {
        tweets = JSON.parse(tweetLs);
    }
    return tweets;
}


function localStorageOnLoad(){
    let tweets = getTweetsFromLocalStorage()

    //loop through the tweets array

    tweets.forEach(function(tweet){

    //create a new button Element
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create a new list element
    const li = document.createElement('li');
    li.textContent = tweet;
    // add remove button to my list element
    li.appendChild(removeBtn);

    //append my list to a do element
    tweetList.appendChild(li);

    });
}