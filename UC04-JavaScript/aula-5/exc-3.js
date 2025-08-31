import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let vetor1 = new Array(10)
    let vetor2 = new Array(10)
    let vetor3 = new Array(20)
    let texto, i, vt1 = 0, vt2 = 0
    // (vt) serve para guardar a posição do vetor
    // usando isso para não interverir na posição dos 2 vetores

    for (i = 0; i < vetor1.length; i++) { // bloco que adiciona textos ao vetor 1
        console.log(`Informe um texto(nome) abaixo`);
        texto = prompt('---> ')

        if(isNaN(texto) && texto.trim() != ""){
            vetor1[i] = texto
        }
        else{
            console.clear()
            console.log('PREENCHIMENTO INVÁLIDO\n');
            i--
        }     
    }
    for (i = 0; i < vetor2.length; i++) { // bloco que adiciona textos ao vetor 2
        console.log(`Informe um texto(nome) abaixo`);
        texto = prompt('---> ')

        if(isNaN(texto) && texto.trim() != ""){
            vetor2[i] = texto
        }
        else{
            console.clear()
            console.log('PREENCHIMENTO INVÁLIDO\n');
            i--
        }     
    }
    for(i = 0; i < vetor3.length; i++){ 
        if(i % 2 == 0){ 
            vetor3[i] = vetor1[vt1] // adicionando texto na posição I do vetor3 
            vt1++ // vt1 guarda a posição somente deste vetor, sem mudar do vetor seguinte
        }
        else{
            vetor3[i] = vetor2[vt2]
            vt2++
        }

    }
    console.log(`
        VETOR (1) = ${vetor1}\n
        VETOR (2) = ${vetor2}\n
        VETOR (3) = ${vetor3}`);
    

}