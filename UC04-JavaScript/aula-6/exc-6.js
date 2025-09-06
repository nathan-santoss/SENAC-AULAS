import promptSync from "prompt-sync";
const prompt = promptSync()

const senhas = [
    'Segredo#789',    
    'ChaveSegura',
    'Acesso_F1l',      
    '123456',
    'chavefacil',
    'ACESSODENIED',
    'MinhaChave1#',
    'VALOR!',
    'Ac3sso@'
];
const especiais = ['@', '#', '!', '%']
senhas.forEach((senha, i) => {
    let teste = senha.split('')
    let temNumero = teste.some(caract => !isNaN(caract))
    let temMAIUSCULA = teste.some(caract => caract !== caract.toLowerCase())
    let temEspecial = teste.some(caract => especiais.includes(caract))
    if(temNumero == true && temMAIUSCULA == true && temEspecial == true){
        senhas[i] = `${senha} = SENHA FORTE <--`
    }
    else{
        senhas[i] = `${senha} = SENHA FRACA`
    }
});

console.log(`[===== SENHAS =====]\n${senhas.join('\n')}`);