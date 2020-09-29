// nueva red neuronal
const brain = require('brain.js');
const network = new brain.recurrent.LSTM();

const fs = require('fs');

// entrenando
// 0 = feliz
// 1 = triste

network.train([
    {
        input: 'contento',
        output: [0]
    },
    {
        input: 'feliz',
        output: [0]
    },
    {
        input: 'triste',
        output: [1]
    },
    {
        input: 'desganado',
        output: [1]
    }
], {
    log: true,
    iterations: 10000 //20000
});

fs.writeFile('data.json', JSON.stringify(network.toJSON()), (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Archivo guardado');
});

// probando

console.log(network.run('feliz')); //0
console.log(network.run('triste'));  //1
console.log(network.run('estoy feliz')); //0
console.log(network.run('estoy triste')); //1
