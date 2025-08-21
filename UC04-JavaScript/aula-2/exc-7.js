import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag
    do{let ano_atual = Number(prompt('Informe o ano para saber se é ou não BISSEXTO --> ')) 
        flag = true
        if(ano_atual > 0 && Number.isInteger(ano_atual)){
            if((ano_atual %4 == 0) && (ano_atual %100 != 0) || ano_atual %400 == 0){
                //1° regra = se o resto por 4 é = 0, e se o resto por 100 NÃO é = 0
                //2° regra = se o resto por 400 é = 400
                // Caso cumpra essas duas regras, é Bissexto
                console.log(`${ano_atual} É um ano bissexto\n`); 
            }
            else{console.log(`\n${ano_atual} NÃO é bissexto\n`);}
        }
        else{
            console.log('OPÇÃO INVÁLIDA, DIGITE NOVAMENTE!\n');
            flag = false
        }

    }while(flag != true)
}