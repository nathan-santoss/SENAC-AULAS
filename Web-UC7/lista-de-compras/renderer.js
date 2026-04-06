
const add_bt = document.getElementById('botao-add')

add_bt.addEventListener('click', (event) => {
    const produto = document.getElementById('nome-prod')
    adicionar_produto(produto.value)
    produto.value = ''
})


const adicionar_produto = (produto) => {
    const categoria = document.getElementById('categoria').value
    const lista_destino = document.getElementById(`lista-${categoria.toLowerCase()}`)
    const new_item = document.createElement('li')
    const qtde_text = lista_destino.querySelector('p')

    new_item.innerHTML = `
        ${produto.toUpperCase()}
        <button class="btn-feito">✔️</button>
        <button class="btn-delete">🗑️</button>
    `


    lista_destino.appendChild(new_item)
    const qtde_itens = lista_destino.querySelectorAll('li').length
    qtde_text.innerHTML = `(${qtde_itens})`
    lista_destino.style.display = 'block'

    const btn_deleteItem = new_item.querySelector('.btn-delete')
    btn_deleteItem.addEventListener('click', (event) => {
        new_item.remove()
        let novototal = lista_destino.querySelectorAll('li').length
        qtde_text.innerHTML = `(${novototal})`
    })

    const btn_finishItem = new_item.querySelector('.btn-feito')
    btn_finishItem.addEventListener('click', (event) => {
        new_item.classList.toggle('item-comprado')
    })
}