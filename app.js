var stdin = process.openStdin();
var bot = require('./nlp/n-grams/ngrams')

stdin.addListener("data", function(d) {
  var response = bot(d.toString().trim())
  console.log(response[0].response)

  });
