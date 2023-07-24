const aluno = 'joão';

//const aluno_1 = { nome: 'joão', aluno_1};

const alunos = ['joão', 'maria'];

console.log(alunos);

console.log(alunos[0]);

alunos.push('Gustavo');

alunos[3] = 'Vitor';

console.log(alunos);

alunos.push(20);

console.log(alunos);

console.log(alunos.pop());

console.log(alunos.shift());


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma / notas.length)

// estruturas de repetição

for (let i = 0; i < notas.length; i++) 
{
   console.log(i);
}

const nome = 'Vitor Silva Souza';

for (let i = 0; i < nome.length; i++) 
{
    console.log(nome[i]);
}

let soma_n = 0;

for (let i = 0; i < notas.length; i++) 
{
    const nota = notas[i];
    soma_n = soma_n + nota;
}

console.log(soma_n);

const media = soma / notas.length;
console.log(media);
