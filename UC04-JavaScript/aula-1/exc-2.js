import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let produto = prompt('Informe o nome do produto -> ')
    let preco = Number(prompt('Qual o preço deste produto? '))
    let desc = Number(prompt('Informe o valor do desconto em porcentagem -> '))
    let preco_final = preco - (preco * desc/100)

    console.log(`\nO nome do produto informado foi => ${produto}\n
        Seu preço é = R$${preco}\n
        O valor do desconto concedido foi de => ${desc}%\n
        Sendo assim, o preço final é = R$${preco_final}`
    );
}
