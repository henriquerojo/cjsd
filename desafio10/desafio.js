/*

Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de kilometros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.

*/

class Carro
{
    // propriedades

    marca;
    cor;
    gastomedio;
    
    // metodos construtores
    
    constructor(marca, cor, gastomedio)
    {
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;
    }

    // metodos da classe

    calcularGasto(distancia, preco)
    {
        const gasto = (distancia / this.gastomedio) * preco;
        console.log(`O gasto para realizar esse percurso é de R$` + gasto.toFixed(2));
    }
}

const gol = new Carro('Volkswagen', 'Azul', 10); // inserindo valor na classe

gol.calcularGasto(100, 5.00); // consumindo método da classe
