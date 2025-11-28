import promptSync from "prompt-sync";
const prompt = promptSync()

class roupas { //criando a classe do objeto 
    constructor(item, quantidade){
        this.item = item.toUpperCase() // informe as propriedades que serão inseridas
        this.quantidade = quantidade
    }
}
let catalogo_1 = [] // criando os dois catálogos
let catalogo_2 = []

while(catalogo_1.length < 10 || catalogo_2.length < 10){ // estrutura de repetição: enquanto os catalogos possuem menos que 10 indices
    console.log(`
        [----- CADASTRO DE ITENS -----]\n`);
    let nome = prompt('Informe o nome da roupa: ').toUpperCase()
    let qtde = Number(prompt('Quantos itens deste estão disponíveis? '))
    if(nome.trim() == '' || qtde < 0 || isNaN(qtde) || !Number.isInteger(qtde)){ // teste para prosseguir 
        console.log('INFORMAÇÕES INVÁLIDAS!\n');
    }
    else{
        let roupa = new roupas(nome, quantidade) // objeto criado
        if(catalogo_1.length < 10){ // teste para saber se o primeiro catálogo está totalmente preenchido
            catalogo_1.push(roupa) // se sim, puxa a roupa pra dentro do catálogo
        }
        else{
            catalogo_2.push(roupa) // se nao, puxa ela pro catálogo 2
        }
        console.clear()
    }
}
catalogo_1.splice(4, 3) // removendo 3 itens a partir do indice 4 
let loja = [...catalogo_1,...catalogo_2] // operador spread espalha o array 

let flag = true // flag para repetição
while(flag){ // enquanto for verdadeira
    let buscar_item = prompt('Informe o nome da peça para buscar --> ').toUpperCase() // recebo o nome do item
    let roupa = loja.find(obj => obj.item === buscar_item) // find busca dentro do array
    // 'obj' é o apelido que dei aos itens do array, como é um objeto, tenho que usar '.propriedadeDoObj' 
        if(roupa){ // estrutura para saber se o item existe
            // o if entende que todo valor existente tem um valor true, diferente de 'null', 'NaN' e 'undefined' onde retorna 'false'
            let disp // variavel para guardar a disponibilidade
            if(roupa.quantidade > 0){ // se tenho pelo menos um item
                disp = `Unidades disponíveis --> ${roupa.quantidade}`// a disp recebe o número de itens
            }
            else{
                disp = `Sem disponibilidade no momento!`
            }
            console.log(`
                [--- ITEM DISPONÍVEL ---]\n
                NOME --> ${roupa.item}\n
                POSIÇÃO DO ARRAY --> ${loja.indexOf(roupa)}\n
                ${disp}`
            );
            break
        }
    if(!roupa){ // se o item não existe
        console.log(`
            [--- ITEM INDISPONÍVEL ---]\n`
        );
    }
    do{
        console.log(`
            \nDeseja uma nova busca?\n
            [1]SIM   [2]NÃO\n`
        );
        let decision = Number(prompt('---> '))
        if (decision === 2) {
            flag = false;
        } 
        else if (decision !== 1) {
            console.log("OPÇÃO INVÁLIDA!\n");
        }
    }while(decision != 1 && decision != 2)
}