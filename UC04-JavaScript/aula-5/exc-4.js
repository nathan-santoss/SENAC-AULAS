import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    let temp = new Array(12)
    let soma = 0
    let media
    
    for(let i = 0; i < meses.length; i++){
        temp[i] = (prompt(`Informe a temperatura do mês de ${meses[i]} --> `)) // deixo o valor como string
        if(isNaN(Number(temp[i])) || temp[i].trim() === ''){ //testo se essa string retornou NaN ou Vazia
            console.log(`Digite um valor válido!`);
            i--
        }
        else{
            soma = soma + Number(temp[i]) // se passou no teste, coloco ela no array e recebo como NUMBER
        }
    }

    media = soma/meses.length
    let acima = {
        meses: [],
        temperaturas: []
    }
    console.log(`
        [----- TEMPERATURAS ANUAIS -----]\n
        (MÉDIA ANUAL = ${media.toFixed(1)} graus)`
    );
    for(let i = 0; i < meses.length; i++){
        if(temp[i] > media){
            acima.meses.push(meses[i])
            acima.temperaturas.push(temp[i])
        }
        console.log(`
            MÊS --> ${meses[i]} = ${temp[i].toFixed(1)} graus\n
            ------------------------------------`            
        );
    }
    console.log(`
        [----- TEMPERATURAS ACIMA DA MÉDIA] -----]`);
    for(let i = 0; i < acima.meses.length; i++){
        console.log(`
            MÊS (${acima.meses[i]}) = ${acima.temperaturas[i]} graus\n
            ---------------------------------------------------------`);
    } 
}