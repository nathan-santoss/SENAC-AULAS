import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag = true
    do{let num = Number(prompt('Informe um número inteiro entre 0 e 1000 --> '))
        let centenas
        let dezenas
        let unidades
        
        if(Number.isInteger(num) && (num >= 0 && num < 1000 )){
            centenas = Math.floor(num/100) // jogando a casa decimal para trás em duas casas e descarto DEZENA E UNIDADE
                console.log(`\n${centenas} centenas`);

            let unid_fora = Math.floor(num/10) // o mesmo passo mas agora isolando só o ultimo numero e descartando a UNIDADE
            dezenas = unid_fora % 10 // deixando só o ultimo numero
                console.log(`${dezenas} dezenas`);

            unidades = num%10 // o resto sempre gera o último numero, ou seja, a unidade
                console.log(`${unidades} unidades`);            
        }else{
            console.log('O NÚMERO NÃO É VÁLIDO, TENTE NOVAMENTE\n');
            flag = false
        }

    }while(flag != true)
}