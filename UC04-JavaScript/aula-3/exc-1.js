import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){

        let dinheiro = Number(prompt('Informe o valor em REAIS para conversão desejada: R$'))
        console.log(`
            Para qual moeda deseja converter?\n
            [1] EURO | [2] DOLAR | [3] PESO\n
            [4] LIBRA | [5] FRANCO`);
        let tipo = Number(prompt('Sua resposta --> '))
        let convertido
        switch(dinheiro){
            case 1:
                tipo = 'EURO'
                convertido = dinheiro*6.35
                break
            case 2:
                tipo = 'DOLAR'
                convertido = dinheiro*5.42
                break
            case 3:
                tipo = 'PESO'
                convertido = dinheiro*0.0042
                break
            case 4:
                tipo = 'LIBRA'
                convertido = dinheiro*7.32
                break
            case 5:
                tipo = 'FRANCO'
                convertido = dinheiro*6.75
                break
            default:
                console.log('\nOPÇÃO INVÁLIDA, TENTE NOVAMENTE\n');
        }

        console.log(`
            O valor R$${dinheiro.toFixed(2)}\n
            Para ${tipo} = ${convertido} `);
}
        




