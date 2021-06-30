//random Page Stuff

function getPage(){
    fetch('http://localhost:3000/results/random')
        .then(r => r.text())
        .then(renderPage)
        .catch(console.warn)
};

function renderPage(msgText){
    window.location.href = msgText;
};

//Search Page 

// function submitSearch(e){
//     e.preventDefault();
//     let add = e.target.name.value

//     function appendMessage(){
//         msgText2 = 'http://localhost:3000/results/' + add 
//         window.location.href = msgText2;
//     };

//     appendMessage()
        
// };

function submitSearch(e){
    e.preventDefault();
    let add = e.target.name.value
    const storedSearches = ['banana', 'fish', 'couscous', 'rice', 'steak', 'pasta', 'fufu', 'hamburger', 'shawarma', 'kimchi'];
    
    if (storedSearches.includes(add)) {
            function appendMessage(){
               msgText2 = 'http://localhost:3000/results/' + add 
               window.location.href = msgText2;
            };
            appendMessage()
    } else {
        function appendMessage(){
            msgText2 = 'https://www.google.com/search?q=' + add 
            window.location.href = msgText2;
            
         };
    appendMessage()
    }

        
};

module.exports = {
    getPage,
    renderPage,
    submitSearch
}