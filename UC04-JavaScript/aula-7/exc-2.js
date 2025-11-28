import promptSync from 'prompt-sync'
const prompt = promptSync()
import {nomedaFUNCAO} from './NomedoarquivoFUNCAO'

let flag = true
let saldo = 0
let valor

let sacar = (valor, saldo) => {
    saldo -= valor
    return saldo
}
let depositar = (valor, saldo) => {
    saldo += valor
    return saldo
}

do{
    console.log(`
        [1] SACAR
        [2] DEPOSITAR 
        [3] SAIR`);
    let option = Number(prompt('---> '))

    switch(option){
        case 1:
            valor = Number(prompt('Informe qual vai ser o SAQUE em REAIS -> ')).toFixed(2)
            saldo = sacar(valor,saldo)
            console.clear()
            console.log(`\nSeu saldo atual é = R$${saldo.toFixed(2)}`);
            break
        case 2:
            valor = Number(prompt('Informe o valor do DEPÓSITO em REAIS -> '))
            saldo = depositar(valor,saldo)
            console.clear()
            console.log(`\nSeu saldo atual é = R$${saldo.toFixed(2)}`);
            break
        case 3:
            flag = false
            break
        default:
            console.log(`${option} NÃO É UMA OPÇÃO VÁLIDA`);
            break
    }
}while(flag)