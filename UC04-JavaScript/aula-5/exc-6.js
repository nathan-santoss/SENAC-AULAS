import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let participantes = Number(prompt('Informe o número de participantes --> '))
    let flag = 0
    let media
    let nota

    class atleta { // classe criada
        constructor(nome){ // paramente inicial
            this.nome = nome.toUpperCase() // propriedades das classes
            this.notas = []
            this.melhorNota
            this.piorNota
            this.media
        }
    }
    let listaDeAtletas = [] // lista para guardar os atletas criados
    do{
        let nome = prompt('Infome o nome do atleta --> ')
        if(!isNaN(Number(nome)) || nome.trim() == ''){ // teste para saber se é um number ou se está vazio
            console.log('Preenchimento inválido!\n');
        }
        else{
            let novoAtleta = new atleta(nome) // objeto atleta é criado e recebe seu nome

            for(let i = 0; i < 7; i++){ // estrutura para guardar notas
                nota = Number(prompt(`Nota do ${i+1}° jurado --> `))
                if(isNaN(nota) || nota < 0 || nota > 10 ){
                    console.log(`NOTA INVÁLIDA`);
                    i--
                } // teste para saber se está vazio, se é menor que 0 a nota ou maior que 10
                else{
                    novoAtleta.notas.push(nota) // caso passe, coloco a nota no array dentro da propriedade   
                }
            }

            novoAtleta.melhorNota = Math.max(...novoAtleta.notas) // procuro a nota maxima dentro do array e salvo
            let indiceMelhor = novoAtleta.notas.indexOf(novoAtleta.melhorNota) // identifico o indice da melhor nota
            novoAtleta.notas.splice(indiceMelhor, 1) // identifico o indice da melhor nota e deleto

            novoAtleta.piorNota = Math.min(...novoAtleta.notas) // processo inverso (com a nota menor)
            let indicePior = novoAtleta.notas.indexOf(novoAtleta.piorNota)
            novoAtleta.notas.splice(indicePior, 1)
            
            let soma = 0
            for(let i = 0; i < 5; i++){
                soma = soma + novoAtleta.notas[i] // soma acumulativa das notas
            }
            media = soma/5
            novoAtleta.media = parseFloat(media.toFixed(2))

            listaDeAtletas.push(novoAtleta) // chamo aquele novo objeto (atleta) no final do array
            console.clear()
            flag++ // flag soma mais 1 até preencher o total dos participantes
        }
        
    }while(flag < participantes)
    let vencedor = listaDeAtletas[0] // defino o vencedor inicial a partir do primeiro do array

    for(let i = 0; i < participantes; i++){
        if(listaDeAtletas[i].media > vencedor.media){ // comparo se tem alguém com uma media melhor que ele até verificar todos os participantes
            vencedor = listaDeAtletas[i] // se sim, este será o novo vencedor
            // "vencedor" estará recebendo todas as propriedades daquele objeto(atleta), naquela posição do array
        }
    }
    console.clear()
    console.log(`
        [APURAÇÃO DE VOTOS]\n
        1° LUGAR --> ${vencedor.nome}
        MÉDIA --> ${vencedor.media}`
    );
    console.log(listaDeAtletas);
}