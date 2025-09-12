import promptSync from 'prompt-sync'
const prompt = promptSync()
import {add, atualizarEstoq, buscar, listar, remover, vendas,relatorio} from './funcao.js'

let flag = true
let estoque = []
let carrinho = []
let lista = []
do{ 
    console.log(`
        Escolha uma das opções
        [0] Sair
        [1] Listar estoque
        [2] Consultar produto
        [3] Adicionar produto
        [4] Remover produto
        [5] Registrar venda
        [6] Relatório`);
    let option = Number(prompt('--> '))
    switch(option){
        case 1:
            listar(estoque)
            break
        case 2:
            buscar(estoque)
            break
        case 3:
            estoque = add(estoque)
            break
        case 4:
            estoque = remover(estoque)
            break
        case 5:
            carrinho = vendas(estoque)
            estoque = atualizarEstoq(estoque, carrinho)
            break
        case 6:
            lista = relatorio(carrinho,estoque)
            break
        case 0:
            flag = false
            break
        default:
            console.log(`A opção ${option} não existe!`);
            break
    }
}while(flag)