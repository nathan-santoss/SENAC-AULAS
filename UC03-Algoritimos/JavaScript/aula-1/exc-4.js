import promptSync from 'prompt-sync'
const prompt = promptSync()

const conta = Number(prompt('Qual o valor da conta no restaurante? '))
let pessoas = Number(prompt('Agora informe quantas pessoas participaram -> '))
const taxa = 10/100
let total = (conta + (conta*taxa))/pessoas

console.log(`O total da conta foi = R$${total.toFixed(2)}`);
console.log(`\nCada um dos ${pessoas} participantes deverá pagar R$${total.toFixed(2)}`);


