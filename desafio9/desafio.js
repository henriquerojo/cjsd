function CalcularDesconto(preco, taxa)
{
    return preco - ((preco * taxa) / 100);
}

function CalcularJuros(preco, taxa)
{
    return preco + ((preco * taxa) / 100);
}

(function()
{
    let preco = 100.00;
    const condicao = 1;

    if (condicao === 1) 
    {
        console.log('O valor é: ', CalcularDesconto(preco, 10));
    }
    else if (condicao === 2) 
    {
        console.log('O valor é: ', CalcularDesconto(preco, 15));
    }
    else if (condicao === 3)
    {
        console.log('O valor é: ', preco)
    }
    else
    {
        console.log('O valor é: ', CalcularJuros(preco, 10));
    }
})()