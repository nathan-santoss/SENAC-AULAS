import promptSync from 'prompt-sync'
const prompt = promptSync()

const alunos = [
    {
        nome: 'Nathan',
        media: 7,
        situacao: true
    },
    {
        nome: 'Karol',
        media: 10,
        situacao: true
    },
    {
        nome: 'Vinicius',
        media: 2.5,
        situacao: false
    },
    {
        nome: 'Daniel',
        media: 3,
        situacao: true
    },
    {
        nome: 'Miguel',
        media: 9,
        situacao: false
    }
]
console.log(`
    [===== ACIMA DA MEDIA =====]`);
let acima = alunos.filter(pessoa => pessoa.media >= 7)
let abaixo = alunos.filter(pessoa => pessoa.media < 4)
acima.forEach(pessoa => {
    console.log(`
        Nome -> ${pessoa.nome}
        Media -> ${pessoa.media}
        Situação (${pessoa.situacao})`);
});
console.log(`
    [===== ABAIXO DA MEDIA =====]`);
abaixo.forEach(pessoa => {
    console.log(`
        Nome -> ${pessoa.nome}
        Media -> ${pessoa.media}
        Situação (${pessoa.situacao})`);
});
let mediaGeral = alunos.reduce((soma, pessoa) => soma + pessoa.media, 0)
console.log('MEDIA GERAL DA TURMA -> ', mediaGeral/alunos.length);

let search = prompt('Informe o nome do aluno para pesquisar -> ').toUpperCase()
let encontrado = alunos.at(pessoa => pessoa.nome.toUpperCase() === search)
if(encontrado.nome.toUpperCase() === search){
    console.log(`
        Nome -> ${encontrado.nome}
        Media -> ${encontrado.media}
        Situação (${encontrado.situacao})`);
}
if(!encontrado.nome){
    console.log(`${search} NÃO ESTÁ MATRICULADO!`);
}

let todosAtivos = alunos.every(pessoa => pessoa.situacao === true)
if(!todosAtivos){
    console.log(`Existem alunos DESATIVADOS`);
}
else{console.log(`\nTODOS OS ALUNOS ESTÃO ATIVOS`);}