import promptSync from 'prompt-sync'
const prompt = promptSync()

export const consultar = (dia,arrayPratos,flag) => {
    switch(dia){
        case 2:
            mostrarPrato(dia,arrayPratos)
            break //(QUARTA)
        case 3:
            mostrarPrato(dia,arrayPratos)
            break //(QUINTA)
        case 4:
            mostrarPrato(dia,arrayPratos)
            break //(SEXTA)
        case 5:
            mostrarPrato(dia,arrayPratos)
            break //(SÁBADO)
        case 6:
            mostrarPrato(dia,arrayPratos)
            break //(DOMINGO)
        case 0:
            return flag = false
            break
        default:
            console.log(`OPÇÃO INVÁLIDA`);
            break
    }
}


const mostrarPrato = (dia, arrayPratos) => {
    console.log(`
        [=== ESCOLHA A REFEIÇÃO ===]
        [0] Café
        [1] Almoço
        [2] Jantar
        [3] Completo
        [9] Menu anterior`
    );
    let refeicao = Number(prompt('--> '))
    console.clear()
    switch(refeicao){
        case 0:
            console.log(`
                [==== CAFÉ DA MANHÃ ====]
                -> ${arrayPratos[dia][refeicao]}`);
            break

        case 1:
            console.log(`
                [===== ALMOÇO =====]
                -> ${arrayPratos[dia][refeicao]}`);
            break

        case 2:
            console.log(`
                [===== JANTAR =====]
                -> ${arrayPratos[dia][refeicao]}`);
            break
        case 3:
            console.log(`
                [===== CARDAPIO DO DIA =====]\n
                Café -> ${arrayPratos[dia][0]}
                Almoço -> ${arrayPratos[dia][1]}
                Jantar -> ${arrayPratos[dia][2]}`);
        case 9:
            break
    }
}