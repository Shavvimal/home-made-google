// Word Cycle

const wordChange = document.getElementById('changingWord')
let words = ["I'm Feeling Lucky","I'm Feeling Puzzled", "I'm Feeling Artistic", "I'm Feeling Playful", "I'm Feeling Doodley"];
let count = 0

function wordCycle(){
    let currentWord = words[count]
    wordChange.innerHTML = currentWord
    count ++ 
    if (count == words.length) { count = 0; }
}
wordCycle()
setInterval(wordCycle, 2000);

// Setup 
const btn = document.querySelector('#changingWord');
const form = document.querySelector('#searchBar');

// Bind event listeners
btn.addEventListener('click', getPage);
form.addEventListener('submit', submitSearch);
