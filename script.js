// Aluno que deve inserir um número para saber a série escolar em que está
let numero = parseInt(prompt("Digite um numero"));
// Verificar a Série Escolar

if (numero <=5){
    alert ("Ensino Fundamental I");
}
else if (numero>=5 && numero<=9){
    alert ("Ensino Fundamental II");
}
else if (numero>=10 && numero<=12){
    alert ("Ensino Médio");
}
else if (numero>=12){
    alert ("Ensino Superior");
}
else if (numero<=1)
{
    alert ("Entrada Inválida");
}