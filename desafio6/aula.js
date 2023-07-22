// procedimento
function meuNome(nome) 
{
    console.log('Seu nome é: ', nome)    
}

meuNome('Henrique')


// funções
function quadrado(valor) 
{
    return valor * valor;
}

const quadrado10 = quadrado(10);
console.log(quadrado10);

function incrementarJuros(valor, percentualJuros)
{
    const valordeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valordeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));


function calcularJuros()
{
    // exemplo
}

function main()
{
    console.log('Programa Principal');
    calcularJuros();
}

main();

/*

O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta

Formula do IMC:

IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo a tabela abaixo:

IMC em adultos Condição:

- Abaixo de 18.5 | abaixo do peso;
- Entre 18.5 e 25 | peso normal;
- Entre 25 e 30 | Acima do peso;
- Entre 30 e 40 | Obeso;
- Acima de 40 | Obesidade Grave

Organizar em funções

*/



function calcularimc(peso, altura)
{
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc)
{
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

function main()
{
const peso = 90;
const altura = 1.90;

const imc = calcularimc(peso, altura);
console.log('Seu IMC é de: ', imc.toFixed(1));
console.log(classificarIMC(imc));
}

main();

console.log('\n');

// função invocada imediatamente

(function()
{
const peso = 90;
const altura = 1.90;

const imc = calcularimc(peso, altura);
console.log('Seu IMC é de: ', imc.toFixed(1));
console.log(classificarIMC(imc));
})();



/*

as funções são objetos

const main2 = main;
main2();

console.log(main2);

*/