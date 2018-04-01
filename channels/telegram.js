var bot = require('../nlp/n-grams/ngrams')
const firebase = require('../database/firebase_app');

var init = (message) => {

  var response = bot(message.text);
  firebase.logProcess(message, response);

  response[0].response.forEach(value => {
      value = tagUserName(value, message.chat.first_name)
  })

  return response
}

var tagUserName = (text, name) => text.replace('@user_name', name);



module.exports = init;
