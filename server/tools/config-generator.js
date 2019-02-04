/* eslint-disable */

const fs = require("fs");
const async = require('async');
const QUOTE = /“(.*)”\s*(?:-([\w .]+))?(?:\n|)/g; // $1: quote, [$2]: author
const WORD = /(?:^|\s)([^\s]*)/g; // $1: word,

const filePrefix = "quote_";
const NamePrefix = "Quote #";
let configs = [];

function generateConfigs(input) {
    input.on("data", function (data) {
        let result;
        let quoteIndex = 1;

        while (result = QUOTE.exec(data.toString())) {
            let quote = result[1];
            let author = result[2];
            let config = {
                author,
                name: NamePrefix + String(quoteIndex).padStart(3,"000"),
                quote
            };
            configs.push(config);
            quoteIndex++;
        }
    });

    input.on("end", function () {
        calculateWords();
    });
}

function calculateWords() {
    async.each(configs, (config, cb) => {
        let result;
        config.words = [];
        while (result = WORD.exec(config.quote)) {
            config.words.push(result[1]);
        }
        let fileName = config.name.replace(/Quote #/, filePrefix);
        fs.writeFile(`server/practice/quotes/${fileName}.json`,JSON.stringify(config),cb);
    }, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("done");
    });
    
}

var input = fs.createReadStream("server/tools/quotes-src.txt");
generateConfigs(input);

