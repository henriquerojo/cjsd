const {gets, print} = require('./funcoes-auxiliares.js');

/*

Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1-100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado

Dados de entrada:
5
50
10
98
23

Saída:
98

*/

const numeros_sorteados = [];

for (let i = 0; i < 5; i++) 
{
    const numeros_sorteado = gets();
    numeros_sorteados.push(numeros_sorteado);
    
}

let maior = 0;

for (let i = 0; i < numeros_sorteados.length; i++) 
{
    const numeros_sorteado = numeros_sorteados[i];
    if (numeros_sorteado > maior)
    {
        maior = numeros_sorteado;
    }
}

print(maior);
