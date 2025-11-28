import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    console.log(`
        Calculando aumento`);
    let salario = 510
    const aumentofixo = 1.5/100
    let aumento = 0
    let anoatual = 2010

    for(let i = 0; i <= 15; i++){
        aumento = aumento + aumentofixo
        console.log(`
            ----- ${anoatual} -----\n
            Salário = R$${salario.toFixed(2)};\n
            Aumento atual = ${(aumento*100).toFixed(1)}%  (R$${(salario*aumento).toFixed(2)} ++)\n
            Salário final = R$${(salario+(salario*aumento)).toFixed(2)}
            -----------xxx-----------\n`);
        salario = salario+(salario*aumento)
        anoatual++
    }
}