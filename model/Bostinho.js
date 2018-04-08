class Bostinho {

  constructor(){
    this.engine = require('../nlp/n-grams/ngrams')
    this.setDatabse('../../database/base');
  }

  sendMsg(text){
    return this.engine(text)
  }

  setDatabse(path){
    this.engine.database = path;
  }

}


module.exports = Bostinho
