import promptSync from 'prompt-sync'
const prompt = promptSync()

// ADICIONAR (ESTOQUE)
class item{
    constructor(nome,qtde, preco){
        this.nome = nome
        this.qtde = qtde
        this.preco = Number(preco).toFixed(2)
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


// registrar venda
export const vendas = (arrayEstoque,carrinho) =>{
    let decision
    let total = 0
    carrinho = []
    console.clear()
    do{
        console.log(`
        [====== ITENS DISPONÍVEIS =======]
        Escolha de acordo com as opções`);
        arrayEstoque.forEach((prod,i) => {
            console.log(`
            [${i+1}] ${prod.nome} -> R$${prod.preco} und`);
        });
        console.log(`
        [====== ITENS DISPONÍVEIS =======]`);
        carrinho = montarCarrinho(arrayEstoque,carrinho)
        decision = Number(prompt('(Escolha: [1] Adicionar mais | [2] Finalizar) --> '))
        
    }while(decision !== 2)
        
        return carrinho
    }
    
    // montando o carrinho 
const montarCarrinho = (array,carrinho) => {
        let total = 0
        let selecionado = Number(prompt('Selecione -> '))
        let unidades = Number(prompt('Unidade(s) -> '))
        let existe = carrinho.findIndex((prod,i) => prod.nome === array[selecionado-1].nome)
        if(existe != -1){
            carrinho[existe].qtde += unidades           
        }
        else{
            let novoProd = new item(array[selecionado-1].nome, unidades, array[selecionado-1].preco)
            carrinho.push(novoProd)
        }
    console.clear()
        console.log(`
            [--------- NOTA FISCAL ---------]`);
    carrinho.forEach(produto => {  
        console.log(`
            Produto -> ${produto.nome}
            Preço -> R$${(produto.preco * produto.qtde).toFixed(2)}`);
            total += produto.preco * produto.qtde
        });
        console.log(`
            [---- TOTAL A PAGAR = R$${total.toFixed(2)} ----]\n\n`);
    return carrinho
}

// atualizando o estoque
export const atualizarEstoq = (arrayEstoq, arrayCarrinho) => {
    arrayCarrinho.forEach(itemCar => {
        arrayEstoq.forEach(estoqItem => {
            if(estoqItem.nome === itemCar.nome){
                estoqItem.qtde -= itemCar.qtde
            }
        });
    });
    return arrayEstoq
}





// gerando relatório
export const gerarRelatorio = (arrayCarrinho, relatorio) => {
    
    let arrayComandas = []
    let venda
    arrayCarrinho.forEach((prod, i) => {
        venda = new item(prod.nome, prod.qtde, prod.preco)
        arrayComandas.push(venda)
    });
    relatorio.push(arrayComandas)
    return relatorio
}

// imprimir relatório
export const imprimir = (relatorio) => {
    console.log(`
        [=============== RELATÓRIO GERAL ===============]\n`);
    for(let i = 0; i < relatorio.length; i++){
        let total = 0
        console.log(`
            [----------------- ${i+1} VENDA -----------------]`);
        relatorio[i].forEach((venda, j) => {
            console.log(`
                [${j+1}] ${venda.nome} -> x${venda.qtde} vendidos (R$${venda.preco * venda.qtde})`);
            total += venda.preco * venda.qtde
        });
        console.log(`
            [--------------- LUCRO = R$${total.toFixed(2)} ---------------]\n`);
    }    
        console.log(`
            [=============== RELATÓRIO GERAL ===============]`);  
}