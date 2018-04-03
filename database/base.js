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
    intentions: 'Quero imagens',
    phrase: ['Qual seu personagem favorito de star wars', 'Me fala um personagem de star wars', 'De quem vc gosta em star wars'],
    response: ['https://swapi.co/api/people/@start_wars_person/?format=json'],
    type:'api'
},

];

module.exports.default = [
  {response: ['Não entendi!']}
]
