import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    class cidade { // criando um objeto com essas propriedades
        constructor(nome, estado){ // defino os atributos informados inicialmente na criação
            this.nome = nome.toUpperCase() // suas propriedades gerais
            this.estado = estado.toUpperCase()
            this.tVeiculo
            this.tAcidentes
            this.indice
        }
    }
    const listaCidades = [] // array para guardar esses objetos (cidades)
    let rn = 0 // contador para saber quantas cidades do RN

    let flag = true // flag para manter a repetição
    do{ 
        console.clear()
        console.log(`
            [PESQUISA INICIADA]\n`
        );

        let nome = prompt('Informe o nome da sua cidade --> ').toUpperCase()
        let estado = prompt('Qual o estado da sua cidade? ').toUpperCase()
        if(nome.trim() == '' || estado.trim() == '' || !isNaN(Number(nome)) || !isNaN(Number(estado))){
            console.log('INFORMAÇÕES INVÁLIDAS\n'); 
            // O teste verifica se NOME ou ESTADO estão vazios ou se SÃO números
        }
        else{
            if(estado == 'RN'){rn++} // se tem algum do estado do RN, contabilizo +1

            let novaCidade = new cidade(nome, estado) // inicializo meu objeto (cidade) com suas propriedades (nome e estado)
            let veiculos = Number(prompt('Qual o total de veículos da cidade? '))
            novaCidade.tVeiculo = parseInt(veiculos) // tVeiculo (propriedade) recebe o valor informado
            
            let acidentes = Number(prompt('Informe o total de acidentes desta cidade --> '))
            novaCidade.tAcidentes = parseInt(acidentes)

            novaCidade.indice = ((acidentes/veiculos)* 100).toFixed(2) // indice (propriedade) recebe o valor da divisão

            for(let i = 0; i < 1; i++){ // estrutura para confirmar mais uma (ou não) cidade para inserir
                console.log(`
                    \nDeseja inserir uma nova cidade?
                    [1] SIM | [2] NÃO`);
                let decision = Number(prompt('---> ')) // usuario informa a opção escolhida
                switch(decision){
                    case 1: // caso 1 -> continua a repetição e limpa a tela
                        continue;
                        console.clear()
                        break
                    case 2: // caso 2 -> encerro a repetição (flag = flase) e limpo a tela
                        flag = false
                        console.clear()
                        break
                    default: // caso contrario -> informo o erro e volto a repetição
                        console.log('OPÇÃO INVÁLIDA\n');
                        i--
                        break
                }
            }
            listaCidades.push(novaCidade) // finalizo colocando o objeto (cidade) dentro do array
        }
    }while(flag)

    let mediaRN, soma = 0 // variaveis para a media do RN
    let mediaVeic, somaveic = 0 // variaveis para saber a media de veiculos das cidades
    let maiorIndice = listaCidades[0], menorIndice = listaCidades[0] // inicio do comparativo

    for(let i = 0; i < listaCidades.length; i++){ // estrutura para percorrer o array das cidades
        if(listaCidades[i].estado == 'RN' && rn > 0){ // teste para saber se o objeto tem "RN" em estado
            soma = soma + listaCidades[i].tAcidentes // soma acumulativa de seus acidentes
        }
        if(listaCidades[i].indice > maiorIndice.indice){ // comparando se a cidade atual (indice) é maior que o MAIOR-atual
            maiorIndice = listaCidades[i] // se sim, ele é o novo maior
        }
        else if(listaCidades[i].indice < menorIndice.indice){ // mesmo processo para o menor indice
            menorIndice = listaCidades[i]
        }
        somaveic = somaveic + listaCidades[i].tVeiculo // somando de forma acumulada os veiculos das cidades
    }
    mediaVeic = somaveic/listaCidades.length // divido a soma pelo total de cidades (encontro a media)
    if(rn > 0){ // se tenho pelo menos uma cidade do RN
        mediaRN = (soma/rn).toFixed(2)
    }
    else{mediaRN = 'SEM CIDADES DO RN REGISTRADAS'} // se não, a media recebe uma string informativa

    console.log(`
        [----- PESQUISA -----]\n
        Maior indice --> ${maiorIndice.indice} (${maiorIndice.nome} %)\n
        Menor indice --> ${menorIndice.indice} (${menorIndice.nome} %)\n
        Média de veiculos nas cidades --> ${Math.ceil(mediaVeic)}\n
        Média de acidentes no RN --> ${mediaRN}`
    );
}