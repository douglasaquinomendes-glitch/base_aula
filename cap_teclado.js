const readline = require('readline');

//Peça números até que o usuário digite 0 → depois mostre a soma.


//é um declaração para capturar do teclado
const numero = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let soma = 0
let number

  numero.question('Digite uma numero: ', (palavra) => {
      console.log(`Você digitou: ${palavra}`);
      numero.close();

  })


  function pedirNumero() {
  numero.question('Digite uma numero: ', (input) => {
    const num = Number(input);

    if (isNaN(num)) {
      console.log('Por favor, digite um número válido.');
      pedirNumero(); // repete a pergunta
    } else if (num === 0) {
      console.log('A soma dos números digitados é:', soma);
      rl.close();
    } else {
      soma += num;
      pedirNumero(); // repete a pergunta
    }
  });
}

// Iniciar a coleta de dados
pedirNumero();
  




  
  




