const { createInterface } = require('node:readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'DIGITE UM NUMERO: ',
});

let soma = 0

rl.prompt()

rl.on('line', (line) => {
    if(line !==0){
        console.log(soma)
        soma += Number(line)
        console.log("soma atual:", soma)
    } 
  
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});