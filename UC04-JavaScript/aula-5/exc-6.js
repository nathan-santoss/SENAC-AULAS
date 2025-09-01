import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let participantes = Number(prompt('Informe o número de participantes --> '))
    let flag = 0
    let soma = 0, media
    let nota

    class atleta { // classe criada
        constructor(nome){ // paramente inicial
            this.nome = nome // propriedades das classes
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
                if(nota == null || nota < 0 || nota > 10 ){console.log(`NOTA INVÁLIDA`);} // teste para saber se está vazio, se é menor que 0 a nota ou maior que 10
                else{
                    novoAtleta.notas.push(nota) // caso passe, coloco a nota no array dentro da propriedade   
                }
            }

            novoAtleta.melhorNota = Math.max(...novoAtleta.notas) // procuro a nota maxima dentro do array e salvo
            let indiceMelhor = novoAtleta.notas.indexOf(novoAtleta.melhorNota) // identifico o indice da melhor nota
            novoAtleta.notas.splice(indiceMelhor, 1) // identifico o indice da melhor nota e deleto

            novoAtleta.piorNota = Math.min(...novoAtleta.notas)
            let indicePior = novoAtleta.notas.indexOf(novoAtleta.piorNota)
            novoAtleta.notas.splice(indicePior, 1)

            listaDeAtletas.push(novoAtleta)
            flag++
        }
        
    }while(flag < participantes)
}