import promptSync from "prompt-sync";
const prompt = promptSync()

let carrinho = [ // criação do carrinho
    {
        nome: 'ALFACE',
        preco: 3.50,
        promocao: false
    },
    { // cada objeto criado tem suas CHAVE -> VALOR
        nome: 'TOMATE',
        preco: 2.99,
        promocao: true
    },
    {
        nome: 'BANANA',
        preco: 5.40,
        promocao: false
    },
    {
        nome: 'CENOURA',
        preco: 4.00,
        promocao: false
    },
    {
        nome: 'OVOS',
        preco: 16.00,
        promocao: false
    }
]

let itens = Number(prompt('Quantos itens você quer visualizar? ')) // peço o número de itens para visualizar
let carrinhoAtual = carrinho.slice(0,itens) // recorto o carrinho a partir do primeiro, até a quantidade solicitada
let lista = [] // crio a lista de itens que itens que irá aparecer
let totalCarrinho = 0 // contabilizando o total dos itens

carrinhoAtual.forEach(item => { // percorro o array criado e ITEM vai representar meus objetos
        lista.push(`
            Nome -> ${item.nome}
            Preço -> R$${item.preco.toFixed(2)}
            --------------------------`)
            // buscando o ITEM e sua chave chamada NOME ou PRECO e adiciono numa string dentro de LISTA
        totalCarrinho += item.preco
});
// agora os elementos dentro de LISTA são meus produtos e preços
console.log(`
    [----- CARRINHO -----]
    ${lista}
    [--- TOTAL = R$${totalCarrinho} ---]`);

let removido = prompt('Informe o nome do produto que deseja remover -> ').toUpperCase() // solicito o item para remover
let index = carrinhoAtual.findIndex(item => item.nome === removido) // pego o indice dele
lista = [] // zero a lista de itens pois ela vai ser modificada

if(index != -1){
    totalCarrinho -= carrinhoAtual[index].preco
    carrinhoAtual.splice(index,1)
}
else{console.log(`O ITEM NÃO EXISTE!\n`);}

carrinhoAtual.forEach(item => { // percorro o array novamente
    lista.push(`
        Nome -> ${item.nome}
        Preço -> R$${item.preco.toFixed(2)}
        --------------------------`
    )
});


console.log(`\nDeseja checar algum produto em promoção? [1] SIM ou [2] NÃO`); 
let flag = true
while(flag){
    let decision = Number(prompt('--> '))
    switch(decision){
        case 1:
            let promocao = carrinhoAtual.filter(item => item.promocao == true)
            // filter percorre o array e vê se ITEM tem algum valor TRUE na chave chamada PROMOÇÃO
            if(promocao.length == 0){console.log(`NÃO HÁ ITENS EM PROMOÇÃO`);} // se o array voltar vazio
            else{ // se ele achar algum, retorna um array com os elementos (objeto)
                console.log(`
                    ITEM EM PROMOÇÃO ENCONTRADO!
                    Nome -> ${promocao[0].nome}
                    Preço -> ${promocao[0].preco}`);
            }
            // não colocar BREAK pois já entra direto no 2 após o processo do 1
        case 2:
            flag = false // se o usuário não quiser checar já passa a flag para FALSE
            break
        default:
            console.log(`OPÇÃO INVÁLIDA!`);
    }       
}

let brindes = [
    '1x - cupom de 40% de desconto',
    '1x - ticket de sorteio (um carro 0 km)',
    '1x - microondas'
]
brindes = brindes.join(';\n')


console.log(`
    [----- CARRINHO -----]
    ${lista}
    [--- TOTAL = R$${totalCarrinho} ---]\n
    [====== BRINDES ======]
${brindes}\n`);