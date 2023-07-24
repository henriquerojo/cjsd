const funcoes = require('./funcoes-auxiliares.js');


console.log(funcoes);
console.log(funcoes.gets());

// object destructuring

const pessoa = 
{
    nome: 'vitor'
}

// const { nome } = pessoa;

// const nome = pessoa.nome;

const {gets, print} = require('./funcoes-auxiliares.js');

print(gets());

