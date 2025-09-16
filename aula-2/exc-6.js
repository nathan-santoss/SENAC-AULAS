import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let valor_fixo
    let total

    console.log(`
        INFORME O TIPO DE SEU VEICULO DE ACORDO COM AS OPÇÕES:\n
        [1] Carro\n
        [2] Moto\n
        [3] Caminhão\n`)
    let tipo = Number(prompt(`SUA RESPOSTA --> `))
    let nome
    switch(tipo){
        case 1:
            valor_fixo = 12
            nome = 'Carro'
            break
        case 2:
            valor_fixo = 7
            nome = 'Moto'
            break
        case 3:
            valor_fixo = 25
            nome = 'Caminhão'
            break
        default:
            console.log(`\nOpção inválida, tente novamente`);
            break
    }
    console.log(`\nQuanto tempo seu veiculo ficou no estacionamento?`);
    let tempo = Number(prompt(`Tempo em horas --> `))
    let ultrapassou

    if(tempo <=2){
        total = valor_fixo
    }else if(tempo >2 && (tipo == 1 || tipo == 2)){
        ultrapassou = tempo - 2
        total = valor_fixo + (ultrapassou*3) 
    }else if(tempo >2 && tipo == 3){
        ultrapassou = tempo - 2
        total = valor_fixo + (ultrapassou*5)
    } 

    console.log(`
        ----- CAIXA -----\n
        TIPO DO VEÍCULO --> ${nome}\n
        Tempo estacionado = ${tempo}h\n
        Valor a pagar R$${total}\n`);
}