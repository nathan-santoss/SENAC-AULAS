import promptSync from "prompt-sync";
const prompt = promptSync()

let texto = prompt('Informe o texto do seu artigo -> ')

let digitado = texto.split(' ')

let proibidas = [
    "porra",
    "caralho",
    "puta"
]
let qtde = 0

let artigoPronto = digitado.map(texto => { // estrutura do map é uma repetição
    // estou percorrendo o array 'digitado' e pegando os itens 'texto' dentro dele
    if(proibidas.includes(texto)){ // vejo se o item 'texto' está dentro de 'proibidas'
        qtde++ // contabilizando os palavroes e quantas palavras modificadas
        return '***'  // se sim, retorno esse valor como '***'
    }
    else{
        return texto  // se não, retorno ele como normalmente é
    }
})
console.log(`
    ${artigoPronto.join(' ')}\n
    TOTAL DE PALAVRAS CENSURADAS = ${qtde}`
);


