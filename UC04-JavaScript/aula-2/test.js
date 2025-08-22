import promptSync from 'prompt-sync'
const prompt = promptSync()

let valor_saque = Number(prompt('Informe o valor do seu saque desejado (min R$10,00 | max R$1000,00) = '))
let resto = valor_saque;

let isolar = (valor_saque%10)
if(isolar == 7 || isolar == 3){
    let resto = valor_saque;

            let notas100 = Math.floor(resto / 100); // quantas notas de 100 cabem no valor do saque 
            resto = resto % 100; // verifico o resto que está faltando das notas de 100

            let notas50 = Math.floor(resto / 50);
            resto = resto % 50;

            let notas20 = Math.floor(resto / 20);
            resto = resto % 20;

            let notas10 = Math.floor(resto / 10);
            resto = resto % 10;

            let notas5 = Math.floor(resto / 5);
            resto = resto % 5;

            let notas2 = Math.floor(resto / 2);
            resto = resto % 2;
}
console.log('isolar = ',isolar);
console.log('resto = ',resto);
                