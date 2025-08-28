import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag = true
    do{
        console.log(`
            Informe um número para saber se é ou não primo`
        );
        let num = Number(prompt('---> '))
        let raiz = Math.sqrt(num)
        let primo = true
        if(num <= 1){console.log(`${num} não é um número primo, tente um número maior que 1`);}
        else{
            for(let i = 2; i <= raiz; i++){
                if(num % i === 0){
                    primo = false
                }
            }
        }
        if(primo == true){console.log(`${num} é um número primo!`);}
        else{console.log(`${num} NÃO é um número primo`);}

        console.log(`
            Deseja continuar?\n
            [1]SIM ou [2]NÃO`);
        
        let r = true
        do{ 
            let decision = Number(prompt('---> '))
            switch(decision){
                case 1:
                    flag = true
                    r = false
                    console.clear()
                    break
                case 2:
                    flag = false
                    r = false
                    console.clear()
                    break
                default:
                    console.log(`${decision} não é um opção válida! Digite corretamente!`);
                    break
            }
        }while(r == true)
    }while(flag == true)
}