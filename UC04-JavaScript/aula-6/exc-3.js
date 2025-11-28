import promptSync from "prompt-sync";
const prompt = promptSync()

let flag = true // flag para repetição
let chat = [] // array para guardar as mensagens
do{
    let mensagem = prompt('digite aqui --> ').toUpperCase() // recebimento de mensagens
    if(mensagem.trim() == ''){ // teste para saber se está vazio
        flag = false // se sim, encerro a repetição
    }
    else{
        chat.unshift(mensagem) // se não, guardo a mensagem no array
    }
}while(flag) // repetir enquanto flag for true

let ultimas = chat.slice(-10).reverse() // valores negativos representam os últimos elementos do array
// o reverse serve para reverter as posições, os últimos agora são os primeiros
let recentes = chat.slice(0, 10) 
// slice retorna um novo array daqueles elementos que escolhi no intervalo (ou não)

console.log(`
    [--- 10 ÚLTIMAS ---]\n
    --> ${ultimas.join("\n")}` // junto as mensagens em uma string e as separo por um \n
);
console.log(`
    [--- 10 RECENTES ---]\n
    --> ${recentes.join("\n")}`
);

flag = true
while(flag){ // estrutura de busca
    let palavra = prompt('Informe a mensagem a palavra chave --> ').toUpperCase()
    if(palavra.trim() == ''){console.log('O CAMPO NÃO PODE ESTÁ VAZIO!\n');} // se estiver vazio
    else{ // se não estiver, continua
        let search = chat.filter((mensagem) => { // o filter percorre o array e eu denomino um parametro chamado 'mensagem'
            // os valores dentro do array, irão ser representados por esse parametro
            return mensagem.includes(palavra) 
            // se a 'PALAVRA' que o usuário digitou faz parte do meu parametro (valores do array chat)
            // se sim, ele retorna um array com os valores (mensagem) dentro do array e guarda na variável 'search' (busca)
            // se não, ele retorna um array vazio
        })
        if(search.length == 0){console.log(`MENSAGEM NÃO ENCONTRADA\n`);} // se o array voltar vazio, então não foi encontrado
        else{ // se sim, pego esse array com as mensagens inclusas
            console.log(`
            [---- MENSAGENS ENCONTRADAS ----]\n
                ${search.join('\n')}` // junto elas com o 'join' e separo por um \n
            );
            
            let decision // flag 'decision' para repetição da busca ou não
            do{
                console.log(`
                    Deseja realizar uma nova busca?
                    [1] SIM ou [2] NÃO`);
                decision = Number(prompt('---> '))
                if(decision == 2){flag = false}    // se digitou 2 => muda a flag da 'busca' e encerra a repetição   
            }while(decision != 1 && decision != 2) // se digitou 1 => sai do bloco mas não muda a flag de repetição de busca
            // while garante que nesse bloco o usuário só possa digitar 1 ou 2
        }
    }
}