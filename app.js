var stdin = process.openStdin();
var bot = require('./nlp/n-grams/ngrams')
var Bostinho = require('./model/Bostinho.js');


stdin.addListener("data", function(d) {

  var bostinho = new Bostinho();
  var response = bostinho.sendMsg(d.toString().trim())
  response[0].response.forEach(value => {
    console.log(value)
  })

});
