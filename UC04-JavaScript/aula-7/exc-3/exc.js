import promptSync from 'prompt-sync'
const prompt = promptSync()
import {add, buscar, listar, remover, vendas} from './funcao.js'

let flag = true
let estoque = []
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
            vendas(estoque)
            break
        default:
            console.log(`A opção ${option} não existe!`);
            break
    }
}while(flag)