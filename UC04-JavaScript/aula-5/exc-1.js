import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let num
    let numeros = [19]
    let pares = [], impares = []
    for(let i = 0; i < 20; i++){
        console.log(`Informe o ${i+1}° número`);
        num = Number(prompt('---> '))
        if(num %2 == 0){pares.push(num)}
        else{impares.push(num)}
    }
    console.log(`
        VETOR COMPLETO --> ${numeros}\n
        PARES --> ${pares}\n
        IMPARES --> ${impares}`
    );
}