const imagemPersonagem = document.getElementById("imagem-personagem")
const opcoesPersonagens = document.getElementById("opcoes-personagens")
const botaoProximo = document.getElementById("botao-proximo")

const mensagem = document.getElementById("mensagem")
const pontosEl = document.getElementById("pontos")
const rodadasEl = document.getElementById("rodadas")

let personagemAtual = null
let listaPersonagens = []
let pontos = 0
let rodadas = 0

async function carregarPersonagens() {
    const resposta = await fetch("https://api.jikan.moe/v4/characters?page=1&limit=20")
    const dados = await resposta.json()
    listaPersonagens = dados.data
}

function obterImagem(personagem) {
    if (!personagem) return ""
    if (!personagem.images) return ""
    if (!personagem.images.jpg) return ""
    if (!personagem.images.jpg.image_url) return ""
    return personagem.images.jpg.image_url
}

function escolherAleatorio(lista, qtd) {
    const copia = [...lista]
    const resultado = []

    while (resultado.length < qtd) {
        const index = Math.floor(Math.random() * copia.length)
        resultado.push(copia.splice(index, 1)[0])
    }

    return resultado
}

async function novaRodada() {
    mensagem.textContent = ""

    if (listaPersonagens.length === 0) {
        await carregarPersonagens()
    }

    rodadas++
    rodadasEl.textContent = rodadas

    const alternativas = escolherAleatorio(listaPersonagens, 4)
    
    personagemAtual = alternativas[
        Math.floor(Math.random() * alternativas.length)
    ]

    imagemPersonagem.src = obterImagem(personagemAtual)

    renderizarOpcoes(alternativas)
}

function renderizarOpcoes(lista) {
    opcoesPersonagens.innerHTML = ""

    lista.forEach(personagem => {
        const botao = document.createElement("button")
        botao.classList.add("opcao")
        botao.textContent = personagem.name

        botao.onclick = () => verificarResposta(personagem)

        opcoesPersonagens.appendChild(botao)
    })
}

function verificarResposta(escolhido) {
    document.querySelectorAll(".opcao").forEach(btn => btn.disabled = true)

    if (escolhido.name === personagemAtual.name) {
        pontos++
        pontosEl.textContent = pontos
        mensagem.textContent = "Correto!"
        mensagem.style.color = "#00e676"
    } else {
        mensagem.textContent = "Errado!"
        mensagem.style.color = "#ff5252"
    }
}

botaoProximo.addEventListener("click", novaRodada)

carregarPersonagens().then(novaRodada)