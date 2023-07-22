function EscreverNome(nome)
{
    return 'Meu nome é ' + nome;
}

function VerificarIdade(idade)
{
    if (idade >= 18)
    {
        console.log(EscreverNome('Henrique') + ' e sou maior de idade.');
    }
    else 
    {
        console.log(EscreverNome('Henrique') + ' e sou menor de idade');
    }
}


(function ()
{
    const idade = 18;
    VerificarIdade(idade);
})()
