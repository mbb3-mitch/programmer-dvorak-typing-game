/* eslint-disable */

const fs = require("fs");
const _ = require('underscore');
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
                name: NamePrefix + quoteIndex,
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
    _.each(configs, config => {
        let result;
        config.word = [];
        while (result = WORD.exec(config.quote)) {
            config.word.push(result[1]);
        }
    });
    console.log(JSON.stringify(configs));
}

var input = fs.createReadStream("server/tools/quotes-src.txt");
generateConfigs(input);

