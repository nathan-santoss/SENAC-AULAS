import promptSync from "prompt-sync";
const prompt = promptSync()

let flag = true
let chat = []
do{
    let mensagem = prompt('digite aqui --> ').toUpperCase()
    if(mensagem.trim() == ''){
        chat.unshift(mensagem)
        flag = false
    }
}while(flag)

let ultimas = chat.slice(-10).reverse()
let recentes = chat.slice(0, 10)

console.log(`
    [--- 10 ÚLTIMAS ---]\n
    --> ${ultimas.join("\n")}`
);
console.log(`
    [--- 10 RECENTES ---]\n
    --> ${recentes.join("\n")}`
);

flag = true
while(flag){
    let palavra = prompt('Informe a mensagem a palavra chave --> ').toUpperCase()
    if(palavra.trim() == ''){console.log('O CAMPO NÃO PODE ESTÁ VAZIO!\n');}
    else{
        let search = chat.filter((mensagem) => {
            return mensagem.includes(palavra)
        })
        if(search.length == 0){console.log(`MENSAGEM NÃO ENCONTRADA\n`);}
        else{
            console.log(`
            [---- MENSAGENS ENCONTRADAS ----]\n
                ${search.join('\n')}`
            );
            
            let decision
            do{
                console.log(`
                    Deseja realizar uma nova busca?
                    [1] SIM ou [2] NÃO`);
                decision = Number(prompt('---> '))
                if(decision == 2){flag = false}              
            }while(decision != 1 && decision != 2)
        }
    }
}