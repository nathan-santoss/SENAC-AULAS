import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let sistemas = {
        Windows: 0,
        Unix: 0,
        Linux: 0,
        Netware: 0,
        MacOS: 0,
        Outros: 0
    }
    let voto, totais = 0
    let flag = true
    do{
        console.log(`
            [VOTAÇÃO INICIADA]
            [1] Windows;\n
            [2] Unix;\n
            [3] Linux;\n
            [4] Netware;\n
            [5] MacOS;\n
            [6] Outros;\n
            [0] PARA ENCERRAR
            Escolha de acordo com a númeração.`
        );
        voto = prompt('----> ')
        if(isNaN(Number(voto)) || voto.trim() == ''){
            console.log('VOTO INVÁLIDO, TENTE NOVAMENTE!');
        }
        else{
            switch(Number(voto)){
                case 1:
                    sistemas.Windows++
                    totais++
                    break
                case 2:
                    sistemas.Unix++
                    totais++
                    break
                case 3:
                    sistemas.Linux++
                    totais++
                    break
                case 4:
                    sistemas.Netware++
                    totais++
                    break
                case 5:
                    sistemas.MacOS++
                    totais++
                    break
                case 6:
                    sistemas.Outros++
                    totais++
                    break
                case 0:
                    flag = false
                default:
                    console.log('OPÇAO INVÁLIDA');
                    break
            }
        }
        console.clear()
        
    }while(flag == true)
    
    console.log(`
        Sitema Operacional          Votos       Percentual(%)\n
        ------------------          ------      -------------\n
        Windows Server                ${sistemas.Windows}               ${((sistemas.Windows/totais)*100).toFixed(1)}%\n
        Unix                          ${sistemas.Unix}               ${((sistemas.Unix/totais)*100).toFixed(1)}%\n
        Linux                         ${sistemas.Linux}               ${((sistemas.Linux/totais)*100).toFixed(1)}%\n
        NetWare                       ${sistemas.Netware}               ${((sistemas.Netware/totais)*100).toFixed(1)}%\n
        Mac OS                        ${sistemas.MacOS}               ${((sistemas.MacOS/totais)*100).toFixed(1)}%\n
        Outros                        ${sistemas.Outros}               ${((sistemas.Outros/totais)*100).toFixed(1)}%\n
        ------------------------------------------------------\n
        TOTAIS DE VOTOS = ${totais}`
    );
}