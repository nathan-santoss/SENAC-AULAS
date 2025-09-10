import promptSync from 'prompt-sync'
const prompt = promptSync()

// ADICIONAR (ESTOQUE)
class item{
    constructor(nome,qtde, preco){
        this.nome = nome
        this.qtde = qtde
        this.preco = preco.toFixed(2)
    }
}
export function add(array){ console.clear()
    console.log(`
        [----- ADICIONANDO PRODUTOS -----]`);
    let nome = prompt('Qual é o produto? ').toUpperCase()
    let qtde = Number(prompt('Informe a quantidade do mesmo -> '))
    let preco = Number(prompt('Qual o valor unitário? '))
    let existe = array.find(produto => produto.nome === nome)
    if(existe){
        array.forEach(item => {
            if(item.nome === nome){
                item.qtde += qtde
            }
        });
    }
    else{
        let produtoNovo = new item(nome,qtde, preco)
        array.push(produtoNovo)
    }
    
    return array
}
// BUSCAR ITEM (ESTOQUE)
export function buscar(array){ console.clear()
    console.log(`
        [----- BUSCANDO PRODUTOS -----]`);
        
    let produto = prompt('Qual o nome do produto? ').toUpperCase()
    let existe = array.filter(item => item.nome === produto)
    if(existe){
        console.log(`
            Produto -> ${existe[0].nome}
            Quantidade disponível -> ${existe[0].qtde}
            Preço -> R$${existe[0].preco} (C/Und)`);
    }
    else{
        console.log(`
            Produto ${produto} não encontrado!`);
    }
}
// LISTAR ESTOQUE
export function listar(array){ console.clear()
    console.log(`
        [----- ESTOQUE ATUAL -----]`);
    array.forEach(item => {
        console.log(`
            Produto -> ${item.nome}
            Quantidade -> ${item.qtde}
            Preço -> R$${item.preco} (C/Und)`);
    });
    console.log(`
        [---------- FIM ----------]`);
}
// REMOVER DO ESTOQUE
export function remover(array){ 
    console.clear()
    let produto = prompt('Informe o produto para remover do estoque -> ').toUpperCase()
    let existe = array.findIndex(itens => itens.nome === produto)
    if(existe === -1){
        console.log(`O produto não existe!`);
    }
    else{
        console.log(`
            Escolha uma opção:
            [1] Remover tudo
            [2] Remover parcial
            [0] Voltar`);
        let decision
        do{
            decision = Number(prompt('--> '))
            switch(decision){
                case 1:
                    array.splice(existe,1)
                    break
                case 2:
                    let remove = Number(prompt(`Quantos(a) itens ${produto} serão removidos? `))
                    if(remove > 0){
                        array[existe].qtde -= remove
                    }
                    else{
                        console.log(`Valor inválido!`);
                    }
                    break
                case 0:
                    break
                default:
                    console.log(`OPÇÃO INVÁLIDA!\n`);
                    break
            }
        }while(decision !== 1 && decision !== 2 && decision !== 0)
    }
    return array
}

// gerar venda

export const vendas = (array) =>{
    do {
        console.log(`
            [====== ITENS DISPONÍVEIS =======]
            Escolha de acordo com as opções`);
        array.forEach(prod,i => {
            console.log(`
            [${i+1}] ${prod.nome} -> R$${prod.preco} und`);
        });
        console.log(`
            [====== ITENS DISPONÍVEIS =======]\n`);
        let selecionado = Number(prompt('Selecione -> '))
        let unidades = Number(prompt('Unidade(s) -> '))
        let carrinho = []
        carrinho.push(array[selecionado+1])
    
        console.log(`
            [--------- NOTA FISCAL ---------]`);
            nota(unidades)
    } while (flag);
}


let nota = (unidades) => {
    carrinho.forEach(prod,i => {
        console.log(`
        [${unidades}] ${prod.nome} -> R$${prod.preco * unidades}`);
    });   
}