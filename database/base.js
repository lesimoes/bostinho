module.exports.base = [
  {
  intentions: 'Preciso café',
  phrase: ['Preciso de um café', 'Preciso de café', 'Preciso tomar um café'],
  response: ['Entendi que vc quer tomar café, né @user_name', 'Café??' ],
  type:'message'
},
  {
    intentions: 'Tomar café',
    phrase: ['Quero tomar um café', 'Quero café', 'Quero beber café', 'Tomar café'],
    response: ['Quero cafééééééééééééé!', 'https://www.naosalvo.com.br/wp-content/uploads/2013/02/CAFE.jpg'],
    type:'message'
},
  {
    intentions: 'Greeting',
    phrase: ['Koe bostinho', 'Fala ai', 'Oi', 'Ola', 'Como vai?', '/start'],
    response: ['Olá @user_name!'],
    type:'message'
},
  {
    intentions: 'Comer um podrão',
    phrase: ['To com fome', 'Quero podrão', 'Partiu lanches'],
    response: ['Bora lanchar?'],
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
  {response: ['Não entendi!']}
]
