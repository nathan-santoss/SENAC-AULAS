import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let cardapio = { // estrutura de classe
        // OBJETO --> VALOR
        burger: 19.50,
        x_burger: 21.50,
        x_salada: 23.50,
        x_bacon: 24.40,
        x_baconEggs: 25.50,
        xTudo: 25.50,
        caipira: 22.50
    };
    //contadores de quantidade
    let quantburger = 0
    let quantx_burger = 0
    let quantx_salada = 0
    let quantx_bacon = 0
    let quantx_baconEggs = 0
    let quantxTudo = 0
    let quantcaipira =0

    let total_conta = 0
    let flag = true // Garantindo a repetição enquanto FLAG for TRUE
    console.log(`
        ----- CARDAPIO -----\n
        ESCOLHA DE ACORDO COM AS OPÇÕES:
        [1]burger = R$19,50;
        [2]X-burger = R$21,50;
        [3]X-salada = R$23,50;
        [4]X-bacon = R$24,40;
        [5]X-baconEggs = R$25,50;
        [6]X-tudo = R$25,50;
        [7]caipira = R$22,50R$
        [0] PARA ENCERRAR\n`);
    do{
        
        let escolha = Number(prompt('Escolha --> '))
        switch(escolha){
            // estrutura para tratar a escolha do usuário
            case 1:
                total_conta = total_conta + cardapio.burger // escolheu o item, somou ao total da conta
                quantburger++ // informo que foi contabilizado um item daquele no carrinho
                break
            case 2:
                total_conta = total_conta + cardapio.x_burger
                quantx_burger++
                break
            case 3:
                total_conta = total_conta + cardapio.x_salada
                quantx_salada++
                break
                
            case 4:
                total_conta = total_conta + cardapio.x_bacon
                quantx_bacon++
                break
            case 5:
                total_conta = total_conta + cardapio.x_baconEggs
                quantx_baconEggs++
                break
            case 6:
                total_conta = total_conta + cardapio.xTudo
                quantxTudo++
                break
            case 7:
                total_conta = total_conta + cardapio.caipira
                quantcaipira++
                break
            case 0:
                console.log('\n----- NOTA FISCAL -----\n');
                // estrutura para checar se existe pelo menos um item daquele
                // se sim, imprima na tela a quantidade, o tipo e o valor deles
                if(quantburger > 0){console.log(`(${quantburger}) Burger = R$${cardapio.burger * quantburger}`);}
                if(quantx_burger > 0){console.log(`(${quantx_burger}) X-Burger = R$${cardapio.burger * quantx_burger}`);}
                if(quantx_salada > 0){console.log(`(${quantx_salada}) X-Salada = R$${cardapio.burger * quantx_salada}`);}
                if(quantx_bacon > 0){console.log(`(${quantx_bacon}) X-Bacon = R$${cardapio.burger * quantx_bacon}`);}
                if(quantx_baconEggs > 0){console.log(`(${quantx_baconEggs}) X-BaconEggs = R$${cardapio.burger * quantx_baconEggs}`);}
                if(quantxTudo > 0){console.log(`(${quantxTudo}) X-Tudo = R$${cardapio.burger * quantxTudo}`);}
                if(quantcaipira > 0){console.log(`(${quantcaipira}) Caipira = R$${cardapio.burger * quantcaipira}`);}
                console.log(`----- TOTAL À PAGAR = R$${total_conta} -----`);
                flag = false 
            default:
                console.log(`O Item ${escolha} não existe, escolha de acordo com o cardápio!`);      
                break
        }
    }while(flag == true)
    

    
    



    
}