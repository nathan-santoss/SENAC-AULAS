import promptSync from 'prompt-sync'
const prompt = promptSync()

let cliente = prompt('Informe seu nome -> ')
let cupom = []

cupom.push(cliente.at(0).toUpperCase())

let num = Math.floor(Math.random() * (999 - 100) + 100)
cupom.push(num.toString())

let desc = Math.floor(Math.random() * (25 - 5) + 5)
cupom.push(desc.toString())

cupom = [cupom[0] + cupom[1], cupom[2]]
cupom = cupom.join('-')

console.log(`\n[===== ${cliente} aqui está seu cupom de desconto -> ${cupom} =====]\n`);