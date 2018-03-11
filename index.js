var bot = require('./nlp/n-grams/ngrams')
const text = 'Queru piza'

var response = bot(text)
console.log(response[0].response);
