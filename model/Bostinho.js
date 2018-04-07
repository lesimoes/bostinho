class Bostinho {

  constructor(){
    this.engine = require('../nlp/n-grams/ngrams')
  }

  sendMsg(text){
    return this.engine(text)
  }

}


module.exports = Bostinho
