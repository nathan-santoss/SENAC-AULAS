import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function() {let idade = Number(prompt('\nInforme sua idade -> '))
let result = idade*365

console.log(`\nA idade do usuário é ${idade}, convertido para dias é = ${result} dias`);
}
