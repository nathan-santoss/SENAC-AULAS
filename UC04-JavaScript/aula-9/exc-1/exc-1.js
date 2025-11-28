import promptSync from 'prompt-sync'
const prompt = promptSync()
import { sortear, imprimir, podio } from './funcao.js'

let jogadores = [
    {
        nome: 'Nathan',
        pontos: 0,
        teste: 0,
        posicao: 0    
    },
    {
        nome: 'Karol',
        pontos: 0,
        teste: 0,
        posicao: 0
    },
    {
        nome: 'Miguel',
        pontos: 0,
        teste: 0,
        posicao: 0
    }
]
let round = 0
let primeiro = []
let segundo = []
let terceiro = []
do{
    let sorteado = sortear(6,1)
    let check = 0
    jogadores.forEach((player) => {
        player.teste = Number(prompt('Tente um número entre 1 e 6 -> '))
        if(player.teste === sorteado){
            check += 1
            if(check <= 1){player.pontos += 2}
            else{player.pontos += 1}
        }
    });
    imprimir(jogadores, sorteado)

    round++
}while(round < 3)

console.log(`
    [======= PÓDIO =======]`);
podio(jogadores, primeiro, segundo, terceiro)


