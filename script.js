/*1) Para a variável ter o valor indefinido é 
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


/*2) Para utilizar os operadores (==, !=, >=) no JS é nescessário 
utilizar a função if (se), que diz se é true ou false, sendo
true ele executa a função com os operadores; se for false ele
não ira executar a função. Quem executará a função é o 
else (senão)
*//*
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

/*3) Esse é programa que calcula o (IMC) de uma pessoa, exibindo 
a mensagem se ela está abaixo do peso, abaixo 18,5; se está no peso 
ideal, entre 18,5 e 24,9; ou se está acima do peso, acima de 24,9.
utilizando os operadores e as funções já conhecidas, sendo elas: if(se), else(senão) & if else(senão se);
realizamos uma formula para medir o IMC.
*//*
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
document.write(imc);

/*4) Esse é um programa que diz a faixa etaria da pessoa
de acordo com a idade dela, sendo <=12 uma criança, >=13 um
adolescente, entre >=19 e <=60 um aulto senão é um idoso.
*//*
let idade = 61;

if(idade <= 12){
    document.write("<br> Criança <br>")
}
else if(idade >= 13 && idade<= 18){
    document.write("<br> Adolescente <br>")
}
else if(idade >= 19 && idade <= 60){
    document.write("<br> Adulto <br>")
}
else{
    document.write("<br> Idoso <br>")
}

/*5) Esse programa criado é responsavel pela autenticação do
usuario. Se o nome de login estiver certo e a senha estiver
correta vai aparecer a mensagem "Login realizado com sucesso",
caso a senha esteja incorreta vai aparecer a mensagem
"Falha de autenticação". Esse programa foi feito utilizando o
if e o else.
*//*
let usuario = "admin";
let senha = 123490;

if(usuario == "admin" && senha == 1234){
    document.write("Login realizado com sucesso <br>")
}
else{
    document.write("Falha de autenticação <br>")
}

/*6) Esse programa serve para calcular a média de 7 notas e
indicar se o aluno foi aprovado ou reprovado, sendo usado o
6 como media. Programa feito utilizando a divisão das 7
notas e com as variaveis if e else.
*//*
let nota1 = 6.6;
let nota2 = 7.5;
let nota3 = 6;
let nota4 = 6;
let nota5 = 5.5;
let nota6 = 9.3;
let nota7 = 0;

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) /7;

if(media >= 6){
    document.write("Aprovado")
}
else{
    document.write("Reprovado")
}

/*7) Programa que mostra na tela o nome, idade, Curso 
e ano.
*/
let nome1 = "Guilherme";
document.write(nome1, "<br>");
let idade1 = "20 anos";
document.write(idade1, "<br>");
let curso1 = "Engenharia de Software";
document.write(curso1, "<br>");
let ano1 = 2024;
document.write(ano1, "<br>");
