import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag = true
    do{
        flag = true// continue
        console.log(`
            ----- INTERROGATÓRIO -----\n
            Vamos realizar algumas perguntas contigo, certo? Responda de acordo com as opções.\n`);
        let positivo = 0
        let i
        let u_procedencia

        let perguntas = [
            'Você telefonou para vítima recentemente?',//0
            'Esteve no local do crime?',//1...
            'Mora perto da vítima?',
            'Devia para a vítima?',
            'Já trabalhou com a vítima?']


        for(i = 0; i < 5; i++){
            console.log(perguntas[i]);
            console.log('[1] SIM | [2] NÃO');
            let resposta = Number(prompt('escolha --> '))
            switch(resposta){
                case 1:
                    positivo++
                    break
                case 2:
                    break
                default:
                    console.log('RESPOSTA INVÁLIDA, TENTE NOVAMENTE!');
                    i-- //para retornar a pergunta anterior
                    break
            }
        }
        // teste de culpabilidade
        if(positivo == 0){
            u_procedencia = 'INOCENTE'
        }
        else if(positivo == 1 || positivo == 2){
            u_procedencia = 'SUPEITO(A)!'
        }
        else if(positivo == 3 || positivo == 4){
            u_procedencia = 'CÚMPLICE!'
        }
        else{
            u_procedencia = 'CULPADO!'
        }
        console.log(`Este usuário é ${u_procedencia}`);
                
        
        // estrutura para saber se terá ou não um novo interrogatório
        
        let reset
        do{
            reset = false
            console.log(`
            Deseja realizar um novo interrogatório\n
            [1] SIM ou [2] NÃO`);
            let decision = Number(prompt('RESPOSTA --> '))
            switch(decision){
                case 1:
                    reset = false
                    flag = false
                    break
                case 2:
                    reset = false
                    break
                default:
                    console.log('Opção inválida, tente novamente!');
                    reset = true
            }
        }while(reset == true)
    }
    while(flag == false)
}