/*

Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis, Sendo elas:

1 - Preço do combustível
2 - Gasto médio de combustível de carro por km
3 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar essa viagem

*/ 

const preco = 4.99; // preco litro combustível
const gasto = 15; // km percorridos para gastar 1 litro de combustível
const distancia = 500; // km percorridos durante a viagem

const litros = distancia / gasto; // calculo para descobrir quantos litros serão necessários para andar 500 kilometros
const custo = litros * preco; // custo do comubustivel para poder percorrer a distancia de 500 km

console.log('A viagem irá custar: R$', custo.toFixed(2)); // saida convertendo casas decimais do custo
