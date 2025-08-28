import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag = true
    let i = 0
    let nota = []
    let soma = 0
    console.log(`
        ------ SUPERMERCADOS TAKARO ------\n
        Você deve informa primeiramente o NOME do produto, em seguida, o PREÇO\n
        Por ultimo, inserir a quantidade.\n`);
    do{ 

        let nome = prompt('Nome --> ')
        let preco = Number(prompt('Preço --> '))
        let quant = Number(prompt('Quantidade --> '))
        if(nome.trim() !== "" && !isNaN(preco) && Number.isInteger(quant) && quant > 0 && preco !== 0){
            let produtos = {// classe chamada de PRODUTOS
                tipo: nome, //A propriedade "TIPO" recebe => a variavel nome
                valor: preco,
                quantidade: quant,
                totaisp: preco*quant
            }
            nota.push(produtos)
            console.clear()
            console.log(`
                SUA COMPRA ---> [------- NOTA FISCAL -------]\n`
            );
                for(i = 0; i < nota.length; i++){
                console.log(`
                Produto -> ${nota[i].tipo} (x${nota[i].quantidade})\n 
                Valor = R$${nota[i].valor} => (R$${nota[i].totaisp.toFixed(2)})\n
                ---------------------- ITEM ${i+1} ----------------------`);
                soma = soma + nota[i].totaisp
            }
            console.log(`
                [------- TOTAL A PAGAR = R$${soma.toFixed(2)} -------]`
            );// aqui eu estou dizendo pra ele ir no item da posição (i) e imprimiPROPRIEDADE (tipo, valor, quantidade...)
        }

        else if(preco === "" || nome.trim() == ""){
            console.clear()
            console.log(`
                [------- NOTA FISCAL -------]\n`);
                for(i = 0; i < nota.length; i++){
                    console.log(`
                    Produto -> ${nota[i].tipo} (x${nota[i].quantidade})\n 
                    Valor = R$${nota[i].valor} => (R$${nota[i].totaisp.toFixed(2)})\n`);
                    soma = soma + nota[i].totaisp
                }
            console.log(`  
            [------- TOTAL A PAGAR = R$${soma.toFixed(2)} -------]\n`);
            flag = false
        }
        else{
            console.clear()
            console.log('PREENCHIMENTO INCORRENTO, TENTE NOVAMENTE!');
        }
        
        
        
    }while(flag == true) // Se flag = FALSE (encerre)

    // Entrando na fase de pagamento
    let reset = true
        while(reset == true){
            let pagamento = Number(prompt('Informe o valor que irá pagar em REAIS--> R$'))
            if(pagamento < soma){
                console.log(`R${pagamento.toFixed(2)} é menor que o valor total!\n`);
            }
            else{
                reset = false
                flag = false
                console.log(`PAGAMENTO DE R$${pagamento}\n`);
                if(pagamento > soma){
                    console.log(`
                        TROCO = R$${(pagamento - soma).toFixed(2)}`);
                }
            }
        }console.log(`
            ------ OBRIGADO POR COMPRAR NO TARAKO! ------\n`);
}
