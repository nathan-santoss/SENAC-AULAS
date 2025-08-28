import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){

    let termos = Number(prompt('Informe quantos termos da tabela Fibonacci deseja visualizar --> '))
    let a = 0
    let b = 1
    let prox
    let fibonacci = [] // array sem tamanho definido
    fibonacci.push(a) //jogando o valor A para a úlima posição do array, até então posição 0
    fibonacci.push(b) // jogando para a última posição (1)
    for(let i = 0; i < termos-2; i++){
        prox = a + b
        fibonacci.push(prox) 
        a = b
        b = prox
    }
    console.log(fibonacci);
}