import promptSync from 'prompt-sync'
const prompt = promptSync()

let altura = Number(prompt('Informe a altura do triângulo -> '))
let largua = Number(prompt('Agora informe a largura do mesmo -> '))
let area = largua*altura.toFixed(2)
let perimetro = (2*(altura+largua))

console.log(
    `\n---Resultados---\n
    Àrea = ${area}\n
    Perimetro = ${perimetro}`
);

