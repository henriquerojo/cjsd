// estrutura de um objeto

const vitor = {
    nome: 'Vitor de Mogi',
    idade: 27
};

console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);

vitor.altura = 1.79;

console.log(vitor.altura);

delete vitor.nome;

console.log(vitor);

// métodos do objeto
const pessoa = {
    nome: 'Joel da Silva',
    idade: 21,
    descrever: function()
    {
        this
        console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade} anos.`); // crase
    }
};

pessoa.descrever();

pessoa.nome = 'Luís';
pessoa.idade = 16;

pessoa.descrever();

// acessando dinamicamente informações de um objeto

const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'teste'; //acesso dinamico

console.log(pessoa);

pessoa.nome = 'Joel da Silva'; //acesso direto

console.log(pessoa);

// classes

class Pessoa 
{
    nome;
    idade;

    descrever() 
    {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const elias = new Pessoa();
elias.nome = 'Elias Golias';
elias.idade = 19;

const rene = new Pessoa();
rene.nome = 'Rene Merce';
rene.idade = 21;

console.log(elias);
console.log(rene);


elias.descrever();
rene.descrever();

// metodo construtor

class Carro
{
    modelo;
    ano;
    
    constructor(modelo, ano) // constructor()
    {
        this.modelo = modelo; // this.modelo = 'padrão';
        this.ano = ano; // this.ano = 2023;
    }

    descrever()
    {
        console.log(`O modelo é ${this.modelo} e o ano é ${this.ano}.`)
    }
}

const gol = new Carro('Gol', 2022);
const fox = new Carro ('Fox', 2019);

gol.descrever();
fox.descrever();


// função recebendo objeto

function CompararPessoas(p1, p2)
{
    if (p1.idade > p2.idade)
    {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    }
    else if (p2.idade > p1.idade)
    {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    }
    else
    {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

CompararPessoas(elias, rene);
