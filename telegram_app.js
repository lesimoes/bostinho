const TELEGRAM_TOKEN = require('./_tokens').telegram;
const Slimbot = require('slimbot');
const slimbot = new Slimbot(TELEGRAM_TOKEN);
const telegram = require('./channels/telegram');

slimbot.on('message', message => {
  var response = telegram(message)
  response[0].response.forEach(value => {
    slimbot.sendMessage(message.chat.id, value);
  })
});


slimbot.startPolling();
