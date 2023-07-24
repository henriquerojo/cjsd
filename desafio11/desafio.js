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
        const imc = this.peso / (this.altura * this.altura)
        return imc.toFixed(1);
    }

    classificarIMC()
    {
        const imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5) 
        {
            return 'Abaixo do Peso';
        }
        else if (imc >= 18.5 && imc < 25)
        {
            return 'Peso Normal';
        }
        else if (imc >= 25 && imc < 30)
        {
            return 'Acima do Peso';
        }
        else if (imc >= 30 && imc < 40)
        {
            return 'Obeso';
        }
        else
        {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log('O IMC de ' + jose.nome + ' é: ' + jose.calcularIMC() + '\nÉ classificado como: ' + jose.classificarIMC());

