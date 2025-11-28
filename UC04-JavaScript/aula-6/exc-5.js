import promptSync from "prompt-sync";
const prompt = promptSync()

let animais = [ // criando array incial
    'PINGUIM',
    'ZEBRA',
    'LEAO',
    'HIPOPOTAMO',
    'GIRAFA'
]
console.log(`
    [====== LISTA ATUAL ======]`);
animais.forEach((animal,i) => { // percorrendo o array usando minha referencia dos elementos (ANIMAL)
console.log(`
    [${i}] - ${animal}`); // imprimo a posição dele e o seu nome
});
console.log(`\nTotal de animais no sistema = ${animais.length}`); 

let inserindo
do{ 
    inserindo = Number(prompt('Quantos animais você irá inserir no sistema? '))
    if(inserindo < 0){
        console.log(`Informe um valor maior que zero!`);
    }
}while(isNaN(inserindo) || inserindo < 0)

if(inserindo > 0){
    let cont = 0
    do{
        let animal = prompt('Informe qual é o animal -> ').toUpperCase()
        let existe = animais.some(atual => atual === animal) // SOME percorre o array para retornar TRUE ou FALSE (vendo se existe)
        if(existe){ // se sim, informo que o animal já foi cadastrado
            console.log(`O animal já está inserido no sistema!`);
        }
        else{
            animais.push(animal) // se não, puxo ele para o array 
            cont++ // contabilizo um novo 
            console.clear()
            console.log(`
                [====== LISTA ATUAL ======]`);
            animais.forEach((animal,i) => {
            console.log(`
                [${i}] - ${animal}`);
            });
            console.log(`\nTotal de animais no sistema = ${animais.length}`);
        }
        
    }while(cont < inserindo) // a repetição disso ocorrerá até o contador chegar no número informado pelo usuário
}

do{
    console.log(`
    [=== ALOCANDO ANIMAIS ===]\n
    [1] Remover o primeiro
    [2] Remover o úlitmo
    [3] Remover em uma posição específica ou nome`);
    let decision = Number(prompt('---> ')) // estrutura de escolha
    switch(decision){
        case 1:
            animais.shift()
            break
        case 2:
            animais.pop()
            break
        case 3:
            let removido = prompt('Informe o NOME ou posição do animal para remoção -> ').toUpperCase()
            let index
            if(isNaN(Number(removido))){ // testo para saber se foi digitado um texto
                index = animais.indexOf(removido) // peço para checar o index daquele texto (nome do animal)
                animais.splice(index,1) // removo 1 elemento a partir do seu index (ele mesmo)
            }
            else if(Number(removido) != -1){
                index = Number(removido) // se for um número, apenas salvo 
                animais.splice(index,1) // e removo
            }
        break
    }
    console.clear()
    console.log(`
        [====== LISTA ATUAL ======]`);
    animais.forEach((animal,i) => {
        console.log(`
            [${i}] - ${animal}`);
    });
    console.log(`\nTotal de animais no sistema = ${animais.length}`);

}while(animais.length > 0)
    console.log(`
        [==== TODOS OS ANIMAIS FORAM ALOCADOS! ====]`);

