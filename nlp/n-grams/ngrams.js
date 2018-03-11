var base = require('../../database/base').base;
var answer = require('../../database/base').default;

const _filter = 0.5;

var init = function(text){
  grams(text)
  response = base.filter( value => {
    if(value.similarity >= _filter)
      return value
  })
  if(response.length != 0)
    return response
  else
    return answer
}

var grams = function(text){
  grams = generateGrams(text)
  base.forEach((value) => {
    for(var key in value.intentions){
      value.intentions[key] = generateGrams(value.intentions[key])
    }
  })
  compareGrams(grams, base)
}

var generateGrams = function(text){
  text = text.toLowerCase();
  return text.match(/[\s\S]{1,3}/g) || []
}

var compareGrams = function(grams, base){
  base.forEach( value => {
    value.similarity = value.intentions
    .map(intent => precision(intent, grams))
    .reduce(maxValue, -Infinity)
  })
}

var precision = function(grams, text){
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




module.exports = init;
