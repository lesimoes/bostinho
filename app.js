const stdin = process.openStdin();
const Bostinho = require('./model/Bostinho.js');

let bostinho = new Bostinho();

stdin.addListener("data", (data) => {
  let response = bostinho.sendMsg(data.toString().trim())
  response[0].response.forEach(value => { console.log(value) })
})
