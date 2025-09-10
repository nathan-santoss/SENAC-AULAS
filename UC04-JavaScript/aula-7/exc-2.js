import promptSync from 'prompt-sync'
const prompt = promptSync()

let flag = true
let saldoatual = 0
do{
    console.log(`
        [1] SACAR ou [2] DEPOSITAR`);
    let result
    let operacao
    let option = Number(prompt('---> '))

    switch(option){
        case 1:
            operacao = Number(prompt('Informe qual vai ser o SAQUE em REAIS -> ')).toFixed(2)
            result = sacar(valor,saldo)
            break
        case 2:
            operacao = Number(prompt('Informe o valor do DEPÓSITO em REAIS -> '))
            depositar
    }
}while(flag)


const sacar = (valor, saldo) => saldo-valor
const depositar = (valor, saldo) => saldo+valor
