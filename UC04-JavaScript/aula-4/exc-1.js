import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let itens = 6.99
    let soma = 0
    for(let i = 0; i < 50; i++){
        soma = soma + itens
        console.log(`
        ${i+1} item - R$${soma.toFixed(2)}`);   
    }
}