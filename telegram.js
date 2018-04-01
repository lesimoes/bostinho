const TELEGRAM_TOKEN = require('./_tokens.js').telegram;
const Slimbot = require('slimbot');
const slimbot = new Slimbot(TELEGRAM_TOKEN);
var bot = require('./nlp/n-grams/ngrams')

slimbot.on('message', message => {
  var response = bot(message.text);
  slimbot.sendMessage(message.chat.id, response[0].response);
});

slimbot.startPolling();
