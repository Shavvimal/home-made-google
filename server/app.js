const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Result = require('./models/search');
const app = express();
app.use(cors());
app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/results', (req, res) => {
    const resultsData = Result.all
    res.send(resultsData);
});



// Helpers
// Normal Search Helpers
const storedSearches = ['Banana', 'Fish', 'Couscous', 'Rice', 'Steak', 'Pasta', 'Fufu', 'Hamburger', 'Shawarma', 'Kimchi'];

function filterSearch(query){
    const resultsData = Result.all
    const resultsFiltered = resultsData.filter((Rslt) => Rslt.query.toLowerCase() === query.toLowerCase())
    return resultsFiltered
}

// Random Page Helper 
function getRandomPage () {
    const resultsData = Result.all
    return (resultsData[Math.floor(Math.random()*resultsData.length)]);
}


// Generate GET for pages 
storedSearches.map(function searchResults(query){
    app.get('/results/' + query, (req, res) => res.send(filterSearch(query)))
})


// GET random Page
app.get('/results/random', (req, res) => res.send(getRandomPage().link))

// test 
app.get('/test', (req, res) => {
    res.send('https://source.unsplash.com/featured/?');
});


module.exports = app;
