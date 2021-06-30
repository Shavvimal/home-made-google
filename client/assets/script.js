function getRandomSite(){
    fetch('http://localhost:3000/results/random')
        .then(r => r.text())
        .catch(console.warn)
};

function goToSite(){
    console.log("i listen")
    // let linkText = getRandomSite()
    // window.location.href = linkText;
};


export default {
    goToSite,
    getRandomSite
}