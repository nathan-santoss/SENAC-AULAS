import promptSync from 'prompt-sync'
const prompt = promptSync()

let participantes = Number(prompt('Informe quantos participantes irão ter: '))
console.clear()
let round = 0

let pessoas = []

for(let i = 0; i < participantes; i++){
    let name = prompt('Informe o nome para sortear -> ')
    pessoas.push(name.trim())
}

const indexWin = Math.floor(Math.random() * pessoas.length)
let ganhador = pessoas.at(indexWin)
console.log(`======= O VENCEDOR FOI [${ganhador.toUpperCase()}] =======`)
