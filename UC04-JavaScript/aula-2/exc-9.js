import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    console.log(`
    ----- CAIXA 24/H -----\n
    NOTAS APENAS DE (100, 50, 20, 10, 5 e 2)\n
    SOMENTE VALORES INTEIROS\n`);

    do{
        let valor_saque = Number(prompt('Informe o valor do seu saque desejado (min R$10,00 | max R$1000,00) = '))

        if(valor_saque < 10 || valor_saque > 1000 || (!Number.isInteger(valor_saque))){
            console.log('O valor não é válido, tente novamente!');
        }
        else{
            let resto = valor_saque;

            let notas100 = Math.floor(resto / 100); // quantas notas de 100 cabem no valor do saque 
            resto = resto % 100; // verifico o resto que está faltando das notas de 100

            let notas50 = Math.floor(resto / 50);
            resto = resto % 50;

            let notas20 = Math.floor(resto / 20);
            resto = resto % 20;

            let notas10 = Math.floor(resto / 10);
            resto = resto % 10;

            let notas5 = Math.floor(resto / 5);
            resto = resto % 5;

            let notas2 = Math.floor(resto / 2);
            resto = resto % 2;

            
            if(resto !== 0){
                console.log('O saque não será possível, pois está fora da capacidade das notas disponíveis. Tente novamente.');
            } else {
                console.log(`O saque será liberado com: \n`);
                
                if (notas100 > 0) {
                    console.log(`${notas100} notas de R$100,00`);
                }
                if (notas50 > 0) {
                    console.log(`${notas50} notas de R$50,00`);
                }
                if (notas20 > 0) {
                    console.log(`${notas20} notas de R$20,00`);
                }
                if (notas10 > 0) {
                    console.log(`${notas10} notas de R$10,00`);
                }
                if (notas5 > 0) {
                    console.log(`${notas5} notas de R$5,00`);
                }
                if (notas2 > 0) {
                    console.log(`${notas2} notas de R$2,00`);
                }
            }
            break;
        }
    }while(true);
}