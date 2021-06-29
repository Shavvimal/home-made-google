const resultsData = require('../data');

class Result {
    constructor(data) {
        this.id = data.id;
        this.path = data.path;
        this.title = data.title;
        this.date = data.date;
        this.description = data.description;
    }
    
    static get all() {
        const results = resultsData.map((oneRes) => new Result(oneRes));
        return results;
    }

    // static get findById(title) {
    //     try {
    //         const results = resultsData.filter((Rslt) => Rslt.title === title)[0];
    //         const resultdisp = new Result(resultsData);
    //         return resultdisp;
    //     } catch (err) {
    //         throw new Error('That querey does not exist!');
    //     }      
    // }
}

module.exports = Result;