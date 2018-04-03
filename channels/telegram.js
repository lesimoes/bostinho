var bot = require('../nlp/n-grams/ngrams')
const firebase = require('../database/firebase_app');
const request = require('request');

var init = (message, callback) => {

  var response = bot(message.text);
  firebase.logProcess(message, response);

  response[0].response = response[0].response.map(value => {
      return tagUserName(tagStarPerson(value), message.chat.first_name)
  })

  if(response[0].type === 'api'){
    typeMessage(response, function(result){
        callback(result)
    })
  }
  else
    callback(response)

}

var tagUserName = (text, name) => text.replace('@user_name', name);

var tagStarPerson = (text) => {
  let person = Math.floor(Math.random() * 10 + 1)
  return text.replace('@start_wars_person', person);
}

var typeMessage = function(message, callback){
  //console.log(message[0].response[1])
  request({url: message[0].response[0], method: 'GET'}, (err, res, body) => {
    if(body){
      message[0].response[0] = JSON.parse(body).name
      callback(message)
    }

  })

}




module.exports = init;
