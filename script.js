/*
Para a variável ter o valor indefinido é 
nescessário ter a instrução let + algum texto escrito ao lado 
e um ; no final para encerrar o comando
*/
let nome;
console.log(nome)
//Utilize a tag console para poder mostrar resultado no inspecionar do google

/*
Para criar uma variável vazia é nescessário 
utilizar a função let + algum texto escrito o sinal de =
ao lado e a variável de null terminando a linha com ;
*/
let disciplina = null;
console.log(disciplina)

/*
Já para uma variável com valor é nescessário
seguir os mesmos passos dos outros comando e depois
do sinal de = abrir as aspas  duplas ("") e escrever
algum texto e encerrar com ;
*/
let texto = "Isso é apenas um teste"
console.log(texto);


/*
Para utilizar os operadores (==, !=, >=) no JS é nescessário 
utilizar a função if (se), que diz se é true ou false, sendo
true ele executa a função com os operadores; se for false ele
não ira executar a função. Quem executará a função é o 
else (senão)
*/
let valor = 10;
if(valor>7){
    document.write("Dez é maior que sete!!! <br>");
}
if(valor=10){
    document.write("O valor é igual a dez!!! <br>");
}
if(valor != 10){
    document.write("O valor não é igual a dez!!! <br>");
}else{
    document.write("O valor é igual a dez!")
}