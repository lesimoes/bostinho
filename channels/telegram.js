var bot = require('../nlp/n-grams/ngrams')
const firebase = require('../database/firebase_app');

var init = (message) => {

  var response = bot(message.text);
  response[0].response = tagUserName(response[0].response, message.chat.first_name)
  firebase.logProcess(message, response);
  return response
}

var tagUserName = (text, name) => text.replace('@user_name', name);



module.exports = init;
