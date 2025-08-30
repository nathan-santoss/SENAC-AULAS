import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let vogais = ['A','E','I','O','U']
    let letras = new Array(15) // criando array de tamanho 15
    let consoantes = [], cont = 0
    let digitado
    for(let i = 0; i < letras.length; i++){
        let ehConsoante = true
        console.log(`Digite a ${i+1}° letra`);
        digitado = prompt('---> ').toUpperCase()
        if(digitado.length == 1 && isNaN(digitado)){ // testando se o que foi digitado tem 1 caracter e NÃO é um número
            letras[i] = digitado
            for(let j = 0; j < vogais.length; j++){ //loop de vogais
                if(digitado === vogais[j]){ // testando se é uma das vogais (uma por vez)
                    ehConsoante = false   // se o digitado for igual a uma das vogais, então consoante = false
                    break
                }
            }
            if(ehConsoante){ //se consoante é true
                consoantes.push(digitado) // guarde e suba mais um contador
                cont++
            }
        }
        else{
            console.log(`DIGITE APENAS UM CARACTER TIPO LETRA\n`);
            i--
        }
    }
    console.log(`
        DIGITADOS = ${letras}
        CONSOANTES --> ${consoantes}\n
        TOTAL = [${cont}] consoantes digitadas`);
}