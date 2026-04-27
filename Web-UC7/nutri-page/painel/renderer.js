const form = document.getElementById('formPaciente')
const tabela = document.getElementById('tabelaPacientes')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('dataNascimento').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const profissao = document.getElementById('profissao').value
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)

    const imc = (peso / (altura * altura)).toFixed(2)

    const linha = document.createElement('tr')

    linha.innerHTML = `
        <td>${nome}</td>
        <td>${nascimento}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${endereco}</td>
        <td>${profissao}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${imc}</td>
        <td class="acoes">
            <button class="editar">Editar</button>
            <button class="excluir">Excluir</button>
        </td>
    `

    tabela.appendChild(linha)

    options(linha)

    form.reset()
})

function options(linha) {
    const botaoExcluir = linha.querySelector('.excluir')
    const botaoEditar = linha.querySelector('.editar')

    botaoExcluir.addEventListener('click', () => {
        linha.remove()
    })

    botaoEditar.addEventListener('click', () => {
        const colunas = linha.children

        document.getElementById('nome').value = colunas[0].innerText
        document.getElementById('dataNascimento').value = colunas[1].innerText
        document.getElementById('email').value = colunas[2].innerText
        document.getElementById('telefone').value = colunas[3].innerText
        document.getElementById('endereco').value = colunas[4].innerText
        document.getElementById('profissao').value = colunas[5].innerText
        document.getElementById('altura').value = colunas[6].innerText
        document.getElementById('peso').value = colunas[7].innerText

        linha.remove()
    })
}

const bt_cep = document.getElementById('buscarCep')
bt_cep.addEventListener('click', async () => {
    const cep = document.getElementById('cep').value

    try{
        const endereco = await buscarCEP(cep)

        document.getElementById('logradouro').value = endereco.logradouro
        document.getElementById('bairro').value = endereco.bairro
        document.getElementById('cidade').value = endereco.cidade
        document.getElementById('estado').value = endereco.estado
    }catch(erro){
        alert(erro.message).toUpperCase()
    }
})





async function buscarCEP(cep) {
    cep = cep.replace(/\D/g, "")

    if(cep.length !== 8){
        throw new Error("CEP inválido")
    }
    const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const dados = await resultado.json()

    if(dados.erro){
        throw new Error("CEP não encontrado")
    }

    const endereco = {
        cep: dados.cep,
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: (dados.uf).toUpperCase()
    }
    
    return endereco
}