var Sentiment = require('sentiment');
const fs = require('fs');
const fileReader = fs.readFileSync('news.txt').toString();
var sentiment = new Sentiment();
var result = sentiment.analyze(fileReader);
console.dir(result);    // Score: -2, Comparative: -0.666
