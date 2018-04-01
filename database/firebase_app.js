const firebaseConfig = require('../_tokens').firebase;
const firebase = require('firebase');

var init = () => {
  try{
      return firebase.initializeApp(firebaseConfig);
  }catch(e){
    console.log('Firebase não foi iniciado')
  }
}

  var logProcess = (question, aswer) => {
    try{
      let uid = firebase.database().ref().child('log').push().key;
      firebase.database().ref('log').child(uid + '/question/').set(question)
      firebase.database().ref('log').child(uid + '/aswer/').set(aswer)
    }catch(e){
      console.log('Não foi possível salvar um log')
    }

  }


  var app = init()
  module.exports.logProcess = logProcess;
