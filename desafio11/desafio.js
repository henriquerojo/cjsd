/*

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura
As pessoas devem ter a capacidade de dizer o valor de seu IMC (peso/(altura*altura));
Instancie uma pessoa chamada José que tenha 70 kg e 1.75 de altura e peça ao José para dizer o valor do seu IMC.

*/

class Pessoa
{

    // propriedades

    nome;
    peso;
    altura;

    // métodos construtores

    constructor(nome, peso, altura)
    {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    // métodos da classe

    calcularIMC()
    {
        const imc = this.peso * (this.altura * this.altura)
        return imc.toFixed(1);
    }

}

const jose = new Pessoa('José', 70, 1.75);

console.log('O IMC de ' + jose.nome + ' é: ' + jose.calcularIMC());

