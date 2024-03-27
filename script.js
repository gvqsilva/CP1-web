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
    document.write("O valor é igual a dez! <br>")
}

/*3 - Esse é programa que calcula o (IMC) de uma pessoa, exibindo 
a mensagem se ela está abaixo do peso, abaixo 18,5; se está no peso 
ideal, entre 18,5 e 24,9; ou se está acima do peso, acima de 24,9.
utilizando os operadores e as funções já conhecidas, realizamos uma 
formula para medir o IMC.
*/

let peso = 75;
let altura = 1.90;

let imc = peso / (altura *altura);

if(imc < 18.5){
    document.write("Abaixo do peso, IMC é de ")
}
else if(imc >= 18.5 && imc <= 24.9 ){
    document.write("Peso ideal, seu IMC é de ")
}
else{
    document.write("Acima do peso, IMC é de ")
}
document.write(imc);"<br>"