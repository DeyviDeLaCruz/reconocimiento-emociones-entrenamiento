// creamos una nueva red neuronal
const brain = require('brain.js');
const network = new brain.recurrent.LSTM();
const tdata = require('./data.json');

network.fromJSON(tdata);

console.log(network.run('feliz')); //0
console.log(network.run('triste'));  //1
console.log(network.run('estoy feliz')); //0
console.log(network.run('estoy triste')); //1

