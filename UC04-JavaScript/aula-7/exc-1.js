import promptSync from 'prompt-sync'
const prompt = promptSync()

console.log(`
    Qual atividade física você praticou?
    [1] Caminhada
    [2] Corrida
    [3] Bicicleta`)
let atividade = Number(prompt('---> '))
let tempo = Number(prompt('Informe quanto tempo durou essa atividade (em minutos) -> '))

let pratica = function(atividade,tempo) {
    let result
    switch(atividade){
        case 1:
            result = `
            Exercicio -> Caminhada
            Gastou =  ${5*tempo.toFixed(2)} calorias`
            break
        case 2:
            result = `
            Exercicio -> Corrida
            Gastou =  ${10*tempo.toFixed(2)} calorias`
            break
        case 3:
            result = `
            Exercicio -> Bicicleta
            Gastou =  ${8*tempo.toFixed(2)} calorias`
            break
        default:
            result = 'Opção inválida!'
    }
    return result
}
console.log(pratica(atividade,tempo));
