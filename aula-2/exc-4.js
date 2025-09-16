import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let salario = Number(prompt('Qual o valor de seu salário? '))
    let solicitado_ep = Number(prompt('Informe o valor desejado para o empréstimo => '))
    let total_apagar = solicitado_ep + solicitado_ep*(3.5/100)

    let parcelas_num = Number(prompt('Em quantas parcelas será contratado? '))
    let parcelasfixas = total_apagar/parcelas_num

    let impedimento = salario*(30/100)

    if(parcelasfixas < impedimento){
        console.log(`
            ----- PARABÉNS! SEU EMPRÉSTIMO FOI APROVADO -----\n
            VALOR SOLICITADO --> R$${solicitado_ep}\n
            JUROS = R$${(total_apagar-solicitado_ep)}\n
            PARCELAS (${parcelas_num}) = R$${parcelasfixas}\n
            TOTAL A PAGAR = R$${total_apagar}\n`
        );
        

    }else{
        console.log(`
            ----- EMPRÉSTIMO NEGADO -----\n
            VALOR SOLICITADO --> R$${solicitado_ep}\n
            TOTAL A PAGAR = R$${total_apagar}\n
            PARCELAS = R$${parcelasfixas}\n
            Suas parcelas ficaram maiores que 30% do seu salário. Tente novamente!\n`
        );     
    }
}