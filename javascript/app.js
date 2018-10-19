//variables
const tweetList = document.getElementById('tweet-list')

//eventlisteners
eventlisteners();
function eventlisteners(){
    //form submission
    document.querySelector('#form').addEventListener('submit', myTweet);

    //remove any tweet
    tweetList.addEventListener('click', removeTweet);

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

function addTweetsToLocalStorage(tweets){
    console.log("this should save your tweet to the local storage");
}