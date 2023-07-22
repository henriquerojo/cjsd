/* 

Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis, sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar essa viagem

*/ 

const precoE = 5.79;
const precoG = 6.66;

const tipo = 'Gasolina';
const kmPorL = 10;
const distancia = 100;

const litros = distancia / kmPorL;
const custoG = litros * precoG;
const custoE = litros * precoE;

if (tipo === 'Gasolina')
{
    console.log(custoG.toFixed(2));
}
else
{
    console.log(custoE.toFixed(2));
}
