var stdin = process.openStdin();
var Bostinho = require('./model/Bostinho.js');

var bostinho = new Bostinho();

stdin.addListener("data", (data) => {
  var response = bostinho.sendMsg(data.toString().trim())
  response[0].response.forEach(value => { console.log(value) })
})
