import promptSync from 'prompt-sync'
const prompt = promptSync()
import { alterar, consultar } from './function.js'

let pratos = [
    ['FECHADO'], // segunda
    ['FECHADO'], // terça
    [
        ['Pão de queijo e bolo de milho'],
        ['Baião de Dois com carne de sol'], // quarta
        ['Tapioca recheada com carne de sol e queijo']
    ],

    [
        ['Cuscuz com carne de sol e nata'],
        ['Moqueca de peixe com pirão'], // quinta
        ['Caldinho de feijão com torresmo']
    ],
    [
        ['Tapioca com queijo coalho e manteiga'],
        ['Feijoada com laranja e couve'], // sexta
        ['Sopa de feijão com macaxeira']
    ],
    [
        ['Cuscuz com ovo'],
        ['Acarajé com vatapá e camarão'], // sabado
        ['Bolo de rolo com café']
    ],
    [
        ['Pão de queijo e bolo de milho'],
        ['Moqueca de peixe com pirão'], // domingo
        ['Caldinho de feijão com torresmo']
    ],

]
let option
do{
    console.log(`
        [===== MENU =====]
        [1] - Consultar cardápio;
        [2] - Remover ou Alterar
        [0] - Sair`);
    option = Number(prompt('Selecione -> '))
    console.clear()
    if(option === 1){
        let flag = true
        do{
            console.log(`
                Informe o dia da semana:
                [FECHADO] Segunda;
                [FECHADO] Terça;
                [2] Quarta;
                [3] Quinta;
                [4] Sexta;
                [5] Sábado;
                [6] Domingo;
                [0] Voltar`);
            let dia = Number(prompt('--> '))
            console.clear()
            flag = consultar(dia, pratos,flag)
        }while(flag !== false)
    }
    if(option === 2){
        pratos = alterar(pratos)
    }

}while(option !== 0)
