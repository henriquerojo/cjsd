/*

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código condição de pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

let preco = 100.00;
let taxa = 0;
const condicao = 'Débito';

if (condicao === 'Débito') 
{
    taxa = (preco * 10) / 100;
    preco = preco - taxa;
    console.log('O valor é: ', preco);
}
else if (condicao === 'Dinheiro' || condicao === 'PIX') 
{
    taxa = (preco * 15) / 100;
    preco = preco - taxa;
    console.log('O valor é: ', preco)
}
else if (condicao === 'duasvezes')
{
    console.log('O valor é: ', preco)
}
else
{
    taxa = (preco * 10) / 100;
    preco = preco + taxa;
    console.log('O valor é: ', preco)
}
