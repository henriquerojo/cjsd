// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número PAR encontrado

const numero = [0, 2, 5, 8, 12, 15, 29, 31, 33, 34, 36];

for (let i = 0; i < numero.length; i++) 
{
    if (numero[i] % 2 === 0) 
    {
        console.log(numero[i]);
    }
}
