let numero = 8;
let a = 0;
let b = 1;
let auxiliar;
let encontrado = 0;

if (numero == 0)
{
    encontrado = 1;
}

else
{
    for (i = 1; i <= numero; i++)
    {
        auxiliar = a + b;
        a = b;
        b = auxiliar;

        if( auxiliar == numero){
            encontrado = 1;
        }
    }
}

if (encontrado == 1)
{
    console.log("O número " + numero + " pertence a sequência de Fibonacci.");

}

else
{
    console.log("O número " + numero + " não pertence a sequência de Fibonacci.");    
}


