import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    console.log('----- SISTEMA TARIFÁRIO -----\n');

    let flag
    do{
        let idade = Number(prompt('Informe sua idade --> '))
        flag = true
        let estuda
        if(idade < 0){
            console.log('\nIDADE INVÁLIDA\n');
            flag = false
        }
        else if(idade <6 && idade >= 60){console.log('\nENTRADA GRATUITA\n');}

        else{let quest = Number(prompt('Você estuda? [1] SIM ou [2] NÃO --> '))
            switch(quest){
                case 1:
                    estuda = true
                    break
                case 2:
                    estuda = false
                    break
                default:
                    console.log('\nOPÇÃO INVÁLIDA, TENTE NOVAMENTE!');
                    flag = false
                    break      
            }

            if(idade >= 6 && idade <= 17 || estuda == true){
                console.log('\nTARIFA MEIA\n');
            }
            else if(idade >= 18 && idade <= 59){
                console.log('\nTARIFA INTEIRA\n');
            }
             
        }
    }while(flag != true)
}