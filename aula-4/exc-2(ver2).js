import promptSync from 'prompt-sync'
const prompt = promptSync()

let i, qtdtermo, valor1 = 0, valor2 = 1, prox

qtdtermo = Number(prompt("Digite quantos termmos deseja visualizar: "))
console.log(`${valor1}`);

for(i = 0; i < qtdtermo; i = i++){
    prox = valor1 + valor2
    console.log(`${valor2}`);
    valor1 = valor2
    valor2 = prox
}