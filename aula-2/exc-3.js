import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let valor_produto = Number(prompt('Informe o valor do produto =>'))
    let total
    if(valor_produto > 100){
        total = valor_produto - (valor_produto*0.05)
        console.log(
            `O de produtos foi = R$${valor_produto} e você recebeu 5% de desconto.\n
            Total a pagar = R$${total}`);
    }else if(valor_produto > 500){
        total = valor_produto - (valor_produto*0.10)
        console.log(
            `O de produtos foi = R$${valor_produto} e você recebeu 10% de desconto.\n
            Total a pagar = R$${total}`);
    }else{
        console.log(`O valor total da sua compra foi = R$${valor_produto}. Sendo este o valor final.`);
    }

    if(total > 300){
        console.log(`Sua compra foi maior que R$300 e por isso recebeu um cupom de 5% para próxima compra!`);
    }
}