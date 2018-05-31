let bot = require('../nlp/n-grams/ngrams')
const firebase = require('../database/firebase_app');
const request = require('request');

let init = async (message) => {

  let response = bot(message.text);
  firebase.logProcess(message, response);

  response[0].response = response[0].response.map(value => {
      return tagUserName(tagStarPerson(value), message.chat.first_name)
  })
  if(response[0].type === 'api'){
    typeMessage(response).then((res) => {return res })
  }
  else
    return response
}

let tagUserName = (text, name) => text.replace('@user_name', name);

let tagStarPerson = (text) => {
  let person = Math.floor(Math.random() * 10 + 1)
  return text.replace('@start_wars_person', person);
}

let typeMessage = async (message) => {
  request({url: message[0].response[0], method: 'GET'}, (err, res, body) => {
    if(body){
      message[0].response[0] = JSON.parse(body).name
      return message;
    }
  })
}

module.exports = init;
