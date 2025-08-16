import promptSync from 'prompt-sync'
const prompt = promptSync()

const km_preco = 5
let percuso = Number(prompt("Informe o tamanho do percuso em Kilometros => "))
const taxa = 10
let total = (km_preco*percuso)+taxa

console.log(`\nO percuso foi de ${percuso}KMs`);
console.log(`Sendo assim, o valor a pagar é de = R$${total}`);



