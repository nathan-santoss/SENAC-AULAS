import promptSync from "prompt-sync";
const prompt = promptSync()

class roupas {
    constructor(){
        this.item
        this.quantidade
    }
}
let catalogo_1 = []
let catalogo_2 = []

while(catalogo_1.length < 10 || catalogo_2.length < 10){
    console.log(`
        [----- CADASTRO DE ITENS -----]\n`);
    let nome = prompt('Informe o nome da roupa: ').toUpperCase()
    let qtde = Number(prompt('Quantos itens deste estão disponíveis? '))
    if(nome.trim() == '' || qtde < 0 || isNaN(qtde) || !Number.isInteger(qtde)){
        console.log('INFORMAÇÕES INVÁLIDAS!\n');
    }
    else{
        let roupa = new roupas()
        if(catalogo_1.length < 10){
            roupa.item = nome
            roupa.quantidade = qtde

            catalogo_1.push(roupa)
        }
        else if(catalogo_1.length == 10){
            roupa.item = nome
            roupa.quantidade = qtde

            catalogo_2.push(roupa)
        }
        console.clear()
    }
}
catalogo_1.splice(4, 3)
let loja = [...catalogo_1,...catalogo_2]

let flag = true
while(flag){
    let buscar_item = prompt('Informe o nome da peça para buscar --> ').toUpperCase()
    let existe = false
    for(let i = 0; i < loja.length; i++){
        if(buscar_item === loja[i].item){
            existe = true
            let disp
            if(loja[i].quantidade > 0){disp = `Unidades disponíveis --> ${loja[i].quantidade}`}
            else{disp = `Sem disponibilidade no momento!`}

            console.log(`
                [--- ITEM DISPONÍVEL ---]\n
                NOME --> ${loja[i].item}\n
                POSIÇÃO DO ARRAY --> ${i}\n
                ${disp}`
            );
            break
        }
    }
    if(existe == false){
        console.log(`
            [--- ITEM INDISPONÍVEL ---]\n`
        );
    }

    let decision
    do{
        console.log(`
            \nDeseja uma nova busca?\n
            [1]SIM   [2]NÃO\n`
        );
        decision = Number(prompt('---> '))
        switch(decision){
            case 1:
                break
            case 2:
                flag = false
                break
            default:
                console.log(`OPÇÃO INVÁLIDA! \n`);
        }
    }while(decision != 1 && decision != 2)
}


