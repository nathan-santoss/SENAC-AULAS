import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag = false
    do{
        let consumo = Number(prompt('Informe o valor consumido em kWh --> '))
        let vencimento = Number(prompt('Qual a data de vencimento de sua fatura? '))
        if(vencimento > 0 && vencimento < 31){
            let limite = 100
            let total
            
        
            if(consumo <= limite){
                total = consumo*1.20
            }else if(consumo > limite){
                total = consumo*1.70
            }

            let datpag
            do{
                datpag = Number(prompt('Em qual dia será efetuado o pagamento de sua fatura? '))
                if(datpag < 0 && datpag > 31 ){
                    console.log("Opção inválida, digite novamente!");
                }
            }while(datpag < 0 && datpag > 31)

            let multa = total * 1.05

            if(datpag > vencimento){
                console.log(`Você pagou sua fatura com ${datpag - vencimento} dias em atraso. Por isso, sua fatura será = R$${multa.toFixed(2)} `);
            }else{
                console.log(`Você realizou o pagamento da fatura dentro do vencimento! Sendo assim, o valor a pagar é = R$${total.toFixed(2)}`);
            }

            console.log('Deseja realizar novamente a consulta? ');
            let decision
            while(decision != 1 && decision != 2){
                decision = Number(prompt('[1]SIM ou [2]NÃO (encerrar atividade 2) --> '))
                switch(decision){
                    case 1:
                        flag = false
                        break
                    case 2:
                        flag = true
                        break
                    default:
                        console.log("Opção inválida, digite novamente!");
                        break
                }
            }
        }
        else{
            console.log("DATA DE VENCIMENTO INVÁLIDA! TENTE NOVAMENTE!");
        }
    }while(flag == false)  
}