const TELEGRAM_TOKEN = require('./_tokens.js').telegram;
const Slimbot = require('slimbot');
const slimbot = new Slimbot(TELEGRAM_TOKEN);
const telegram = require('./channels/telegram');


slimbot.on('message', message => {
  var response = telegram(message)
  slimbot.sendMessage(message.chat.id, response[0].response);
});

slimbot.startPolling();
