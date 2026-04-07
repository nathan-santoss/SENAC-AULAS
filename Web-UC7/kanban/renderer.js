const bt_addTask = document.getElementById('add-bt')

const coluna_afazer = document.getElementById('coluna-fazer')
const coluna_pendente = document.getElementById('coluna-fazendo')
const coluna_feito = document.getElementById('coluna-feito')

const todas_colunas = [coluna_afazer, coluna_pendente, coluna_feito]


bt_addTask.addEventListener('click', (event) => {
    const new_task = document.getElementById('nova-tarefa')
    adicionar_tarefa(new_task.value)
    new_task.value = ''

})

function adicionar_tarefa(nova_tarefa){

    let nova_taskDIV = document.createElement('div')
    nova_taskDIV.id = `task-afazer-${nova_tarefa.toLowerCase()}`
    nova_taskDIV.className = 'div-task-afazer'

    coluna_afazer.appendChild(nova_taskDIV)

    let tarefa = document.createElement('p')
    tarefa.textContent = `${nova_tarefa}`

    let bt_delete = document.createElement('button')
    bt_delete.textContent = '❌'
    bt_delete.addEventListener('click', () => nova_taskDIV.remove())

    let bt_edit = document.createElement('button')
    bt_edit.textContent = '⚙️'

    let bt_avancar = document.createElement('button')
    bt_avancar.textContent = '⏭️'
    bt_avancar.addEventListener('click', () => move_task(nova_taskDIV))

    const conteudo_task = [tarefa, bt_avancar, bt_edit, bt_delete]
    let i = 0
    do{
        nova_taskDIV.appendChild(conteudo_task[i])
        i++
    }while(i !== conteudo_task.length)
    
    
}

const move_task = (tarefa) => {
    let div_pai = tarefa.parentElement.id
    switch(div_pai.toLowerCase()){
        case 'coluna-fazer':
            todas_colunas[1].appendChild(tarefa)
            break
        case 'coluna-fazendo':
            todas_colunas[2].appendChild(tarefa)
            break
    }
}

const editar_task = (tarefa) => {
    // continua aqui
}

