var base = require('../../database/base').base;
var answer = require('../../database/base').default;

const _filter = 0.5;


var init = (text) => {

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

var exec_grams = (text, base) => {
  let grams = generateGrams(text)
  base.forEach((value) => {
    value.grams = []
    for(var key in value.phrase){
      value.grams[key] = generateGrams(value.phrase[key])
    }
  })
  compareGrams(grams, base)
}

var generateGrams = (text) => text.toLowerCase().match(/[\s\S]{1,3}/g) || [];


var compareGrams = (grams, base) => {
  base.forEach( value => {
    value.similarity = value.grams
    .map(intent => precision(intent, grams))
    .reduce(maxValue, -Infinity)
  })
  base.sort(compareSimilarity);
}

var precision = (grams, text) => {
  let cont = 0;
  for(var i in text){
    for(var x in grams){
      if(text[i] == grams[x])
      cont ++
    }
  }
  return cont / text.length
}

var maxValue = ( max, cur ) => Math.max( max, cur );

var compareSimilarity = (a, b) => {
  if (a.similarity < b.similarity)
    return 1;
  if (a.similarity > b.similarity)
    return -1;
  return 0;
}




module.exports = init;
