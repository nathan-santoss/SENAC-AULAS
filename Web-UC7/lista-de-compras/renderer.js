
const add_bt = document.getElementById('botao-add')

add_bt.addEventListener('click', (event) => {
    const produto = document.getElementById('nome-prod').value
    adicionar_produto(produto)
})


const adicionar_produto = (produto) => {
    const categoria = document.getElementById('categoria').value
    const lista_destino = document.getElementById(`lista-${categoria.toLowerCase()}`)
    const new_item = document.createElement('li')
    
    const qtde_itens = lista_destino.children.length
    const qtde_text = lista_destino.querySelector('p')
    

    switch(categoria.toLowerCase()){
        case 'limpeza':
            new_item.innerHTML = `${produto.toUpperCase()}`
            break
        case 'frutas':
            new_item.innerHTML = `${produto.toUpperCase()}`
            break
        case 'mercearia':
            new_item.innerHTML = `${produto.toUpperCase()}`
            break
        case 'congelados':
            new_item.innerHTML = `${produto.toUpperCase()}`
            break
    }
    lista_destino.appendChild(new_item)
    qtde_text.innerHTML = `(${qtde_itens})`
    lista_destino.style.display = 'block'
}