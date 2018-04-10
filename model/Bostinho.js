class Bostinho {

  constructor(filter = 0.5){
    this.engine = require('../nlp/n-grams/ngrams')
    this.engine.setFilter(filter)
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
