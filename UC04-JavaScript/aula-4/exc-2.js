import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){

    let termos = Number(prompt('Informe quantos termos da tabela Fibonacci deseja visualizar --> '))
    let a = 0
    let b = 1
    let prox
    let fibonacci = []
    fibonacci[0] = a   
    for(let i = 1; i < termos-1; i++){
        prox = a + b
        
        a = b
        b = prox
        fibonacci[i] = a
        fibonacci[i+1] = b
    }
    console.log(fibonacci);
}