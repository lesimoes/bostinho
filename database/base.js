module.exports.base = [
  {
  intentions: 'Comer Pizza',
  phrase: ['Quero comer pizza', 'Quero pizza', 'Comer pizza', 'Onde eu posso comer uma pizza'],
  response: 'Entendi que vc quer comer pizza, né @user_name',
  type:'message'
},
  {
    intentions: 'Tomar café',
    phrase: ['Quero tomar um café', 'Quero café', 'Quero beber café', 'Tomar café'],
    response: 'Quero cafééééééééééééé!',
    type:'message'
},
  {
    intentions: 'Ir ao cinema',
    phrase: ['Quero ver um filme', 'Aqui tem cinema?', 'Quero ir no cinema'],
    response: 'Hum, saquei que vc quer ir ao cinema',
    type:'message'
},
  {
    intentions: 'Comer um podrão',
    phrase: ['To com fome', 'Quero podrão', 'Partiu lanches'],
    response: 'Bora lanchar?',
    type:'message'
},
  {
    intentions: 'Tomar cerveja',
    phrase: ['Preciso tomar um gelo', 'Sextou', 'Quero beber'],
    response: 'Bora bebe!',
    type:'message'
},
  {
    intentions: 'Tomar café',
    phrase: ['Quero tomar um café', 'Quero café', 'Quero beber café', 'Tomar café'],
    response: 'Quero cafééééééééééééé!',
    type:'message'
},
{
  intentions: 'Tomar café',
  phrase: ['Quero tomar um café', 'Quero café', 'Quero beber café', 'Tomar café'],
  response: 'Quero cafééééééééééééé!',
  type:'message'
},
{
    intentions: 'Endpoint',
    phrase: ['teste'],
    response: 'https://http2.mlstatic.com/camiseta-emoji-coco-emoticon-whatsapp-cocozinho-camisa-blusa-D_NQ_NP_658426-MLB26015906808_092017-F.jpg',
    type:'api'
},


];

module.exports.default = [
  {response: 'Não entendi!'},
  {response: 'Oiii?!'}
]
