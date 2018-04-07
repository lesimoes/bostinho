## :poop: Bostinho (Seu bot amiguinho)

![bostinho pic](https://media.giphy.com/media/l0MYSMV95h0NY6L1m/giphy.gif)


### Instalar
`npm install bostinho`

### Exemplo de uso

```javascript
var stdin = process.openStdin();
var Bostinho = require('bostinho');

stdin.addListener("data", function(d) {

  var bostinho = new Bostinho();
  var response = bostinho.sendMsg(d.toString().trim())
  response[0].response.forEach(value => {
    console.log(value)
  })

});
```

### Telegram

1- Configurar o token telegram no arquivo `_tokens.js`
2- Executar `node telegram_app.js`

### Logs (Firebase)
1- Crir projeto no Firebase
2- Configurar o app token do Firebase no arquivo `_tokens.js`


### Base de conhecimento

A base de conhecimento do bostinho está em `/database/base.js` e segue essa estrutura:

```javascript
{
intentions: 'Preciso café',
phrase: ['Preciso de um café', 'Preciso de café', 'Preciso tomar um café'],
response: ['Entendi que vc quer tomar café, né @user_name', 'Café??' ],
type:'message'
},
```
intentions: Um identificador para a intenção do texto.
phrase: Frases que remetem áquela intenção.
response: Resposta que o bot irá retornar caso áquela intenção seja identificada.
type: Tipo de resposta do bot.

#### Response tags
É possível substituir os responses tags por outro texto, por exemplo, no exemplo do telegram a tag @user_name será substituida pelo nome do usuário no telegram.


### Sobre

Bostinho é uma API para chatbots capaz de extrair intenções de textos.

### Info
Em um cenário onde a base de conhecimento é pequena e o usuário pode cometer desvios de grafia, em relação a extração de intenções do texto, o Bostinho apresenta resultados melhores que o DialogFlow. Veja o caso de teste para a intenção "Preciso café"

Resultdo do Bostinho
![bostinho scenario](https://i.imgur.com/Zll3IQb.gif)
Resultado do DialogFlow
![dialog flow scenario](https://i.imgur.com/XZ8XsIc.gif)




Mais detalhes e uma implementação em PHP estão na miha dissertação: https://www.researchgate.net/publication/323688070_MMRecommender_Arquitetura_Aberta_para_Sistemas_de_Recomendacao





Feito com muito :heart:, :coffee: e :beer: por **lesimoes**.
