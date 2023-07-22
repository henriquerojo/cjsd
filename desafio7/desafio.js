function VerificarIdade(idade)
{
    if (idade >= 18)
    {
        return 'Maior de idade';
    }
    else 
    {
        return 'Menor de idade';
    }
}

// VerificarIdade(26);

(function ()
{
    const idade = 18;
    console.log(VerificarIdade(idade));
})()
