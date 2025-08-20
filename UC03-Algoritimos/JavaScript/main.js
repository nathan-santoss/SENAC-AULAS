import promptSync from 'prompt-sync'
const prompt = promptSync()

import { exec } from 'child_process';


let atividade = Number(prompt('Informe qual atividade será executada -> '))
let arquivo

switch(atividade){
    case 1:
        arquivo = 'aula-1/exc-1.js';
        break
    case 2:
        arquivo = 'aula-1/exc-2.js';
        break
    case 3:
        arquivo = 'aula-1/exc-3.js';
        break
    case 4:
        arquivo = 'aula-1/exc-4.js';
        break
    case 5:
        arquivo = 'aula-1/exc-5.js';
        break
}

exec(`node ${arquivo}`,(error, stdout, stderr) => {
    switch(true){
        case !!error:
            console.log(`Erro ao executar o arquivo: ${error.message}`);
            break
        case !!stderr:
            console.log(`Erro: ${stderr}`);
            break
        default:
            console.log(`Saída: \n ${stdout}`);
            break
    }
})

