const reload = require('require-reload')(require)

let _filter = 0.5;
let path_database = '../../database/base';

let init = (text) => {

  let base = reload(path_database).base;
  let answer = reload(path_database).default

  exec_grams(text, base)
  response = base.filter( value => {
    if(value.similarity >= _filter)
      return value
  })
  if(response.length != 0)
    return response
  else
    return answer
}

let exec_grams = (text, base) => {
  let grams = generateGrams(text)
  base.forEach((value) => {
    value.grams = []
    for(var key in value.phrase){
      value.grams[key] = generateGrams(value.phrase[key])
    }
  })
  compareGrams(grams, base)
}

let generateGrams = (text) => text.toLowerCase().match(/[\s\S]{1,3}/g) || [];


let compareGrams = (grams, base) => {
  base.forEach( value => {
    value.similarity = value.grams
    .map(intent => precision(intent, grams))
    .reduce(maxValue, -Infinity)
  })
  base.sort(compareSimilarity);
}

let precision = (grams, text) => {
  let cont = 0;
  for(let i in text){
    for(let x in grams){
      if(text[i] == grams[x])
        cont ++
    }
  }
  return cont / text.length
}

let maxValue = ( max, cur ) => Math.max( max, cur );

let compareSimilarity = (a, b) => {
  if (a.similarity < b.similarity) return 1;
  if (a.similarity > b.similarity) return -1;
  return 0;
}


module.exports = init;
