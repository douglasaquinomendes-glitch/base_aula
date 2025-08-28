const readline = require('readline');

//variaveis
let varA = 0 //inteiro
let varB = "oi" //string
let varC = 0.0 //float
let varD = "" //string vazia
let varE = null //nulo

varA = 4
let soma = varA + varA+(2)

console.log(soma)

//todo valor maior que 20, Mensagem: "maior que 20"
if(soma>20){
    console.log("valor maior que 20")
} else {
    console.log("valor é menor que 20")
}

//verifique a nota do aluno, caso seja maior ou igual a 7 aprovado
// caso a nota esteja entre 4 e 6,9 recuperação
// caso a nota seja inferior a 4 reprovado


/**
if //se
else if //se entao
else //entao

if nota >= 7 mensagem aprovado
else if nota >= 4 e nota < 7 mensagem recuperacao
else mensagem reprovado
 */

/**
const nota = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
nota.question('Digite uma palavra: ', (palavra) => {
  console.log(`Você digitou: ${palavra}`);

  if(palavra >=7){
    console.log("Aprovado")
}else if(palavra >= 4 & palavra < 7){
    console.log("Aluno está em recuperação", palavra)
}else {
    console.log("Reprovado")
}
  nota.close();
});
 */

//Verifique se um valor é maior ou igual a 60, caso seja 
// mensagem "Maior que 60"1
//caso seja menor-> mensagem "menor que 60"


/*
domingo -> 1
segunda -> 2 ...
terça
quarta
quinta
sexta
sábado
*/
let dia_semana = 7
if(dia_semana == 1){
    console.log("Hoje é Domingo")
} else if(dia_semana == 2){
    console.log("Hoje é Segunda")
}else if(dia_semana == 3){
    console.log("Hoje é Terça")
}else if(dia_semana == 4){
    console.log("Hoje é Quarta")
}else if(dia_semana == 5){
    console.log("Hoje é Quinta")
}else if(dia_semana == 6){
    console.log("Hoje é Sexta")
}else if(dia_semana == 7){
    console.log("Hoje é Sábado")
} else {
    console.log(" if else dia inválido")
}



/*
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
*/

switch(dia_semana){
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda")
        break;
    case 3:
        console.log("terça")
        break;
    case 4:
        console.log("quarta")
        break;
    case 5:
        console.log("quinta")
        break;
    case 6:
        console.log("segunda")
        break;
    case 7:
        console.log("sabado")
        break;
    default:
        console.log("switch dia invalido")
}


/**
 * 
 * var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
 */

var contar_alunos = 0
var total_alunos = b10
while(contar_alunos <= total_alunos ){
    contar_alunos ++
    
    console.log("total alunos", contar_alunos)
}


