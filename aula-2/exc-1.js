import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function() {

    let limite = Number(prompt('Qual a velocidade máxima da via? '))
    let limite10a = limite + (limite *1.10)
    let velocidade = Number(prompt('Informe a velocidade que você está percorrendo na via --> '))

    if(velocidade <= limite){
        console.log('Você está dentro do limite permitido na via!');
    }else if(velocidade <= limite10a){
        console.log(`Atenção! O limite da via é de ${limite} e você está acima do permitido`);
    }else if(velocidade > limite10a){
        console.log(`Atenção! O limite da via é de ${limite} e você está mais de 10% acima do permitido!`);
    }
}