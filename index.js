const bot = require('./nlp/n-grams/ngrams')

var response = bot('quero tomar cafe');
console.log(response[0].response);
