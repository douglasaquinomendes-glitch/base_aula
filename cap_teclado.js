const readline = require('readline');



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