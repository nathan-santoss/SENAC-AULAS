import promptSync from 'prompt-sync'
const prompt = promptSync()

console.log("Vamos iniciar a execução das atividades abaixo\n");

let flag = true
do{
    let aula = Number(prompt("Informe qual a aula (em números) => "))
    let atv = Number(prompt("Agora informe qual a atividade em questão => "))

    try{
        const pasta = `./aula-${aula}/exc-${atv}.js`
        const modulo = await import(pasta)

        if(modulo.default){
            console.log(`Executando abaixo atividade ${atv}\n`);
            modulo.default()           
        }
        else{
            console.log("O arquivo/destino não foi encontrado")
        } 
    }
    catch (err){
            console.error("Erro ao tentar executar!", err.message); 
    }
    
    let invalido = true
    do{ 
        console.log('\nDeseja checar outro arquivo? [1] SIM ou [2] NÃO;');
        let decisao = Number(prompt(`--> `))
        switch(decisao){
            case 1:
                flag = true
                invalido = false
                break
            case 2:
                flag = false
                invalido = false
                break
            default:
                console.log("Resposta inválida, digite novamente!\n");
                break
        }
    }while(invalido == true)

}while(flag == true)

    



