import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    let flag
        do{flag = true
            console.log(`
            Vamos calcular!\n
            Informe o tipo da sua operação matemática de acordo com as opções abaixo:\n
            [1]BÁSICA --> Soma, subtração, multiplicação e divisão.\n
            [2]AVANÇADA --> Raiz quadrada, potenciação.`);
        let nivel = Number(prompt('ESCOLHA --> '))
        switch(nivel){
            case 1: //opção basica (inicio)
                do{ 
                    flag = true
                    console.log(`
                    Você escolheu o tipo BÁSICA. Agora escolha qual a operação:\n
                    [1] Soma | [2] Subtração | [3]Multiplicação | [4] Divisão`);
                    let num1
                    let num2
                    let operacao = Number(prompt('ESCOLHA --> '))
                    switch(operacao){     
                        case 1:
                            num1 = Number(prompt('Digite o primeiro número: '))
                            num2 = Number(prompt('Digite o segundo número: '))
                            let soma = num1 + num2
                            console.log(`O resultado é = ${soma.toFixed(2)}`);
                            break
                        case 2:
                            num1 = Number(prompt('Digite o primeiro número: '))
                            num2 = Number(prompt('Digite o segundo número: '))
                            let subtracao = num1 - num2
                            console.log(`O resultado é = ${subtracao.toFixed(2)}`);
                            break
                        case 3:
                            num1 = Number(prompt('Digite o primeiro número: '))
                            num2 = Number(prompt('Digite o segundo número: '))
                            let mult = num1 * num2
                            console.log(`O resultado é = ${mult.toFixed(2)}`);
                            break
                        case 4:
                            num1 = Number(prompt('Digite o primeiro número: '))
                            num2 = Number(prompt('Digite o segundo número: '))
                            let div = num1 / num2
                            console.log(`O resultado é = ${div.toFixed(2)}`);
                            break
                        default:
                            console.log('Opção inválida, tente novamente!');
                            flag = false                    
                    }
                }while(flag == false)
                break //fim da opção básica

            case 2: //opção avançado (inicio)
                
                do{ 
                    flag = true
                    console.log(`
                        Você escolheu o tipo AVANÇADA. Escolha uma das opções:\n
                        [1] Raiz quadrada | [2] Potenciação`);
                    let operacao = Number(prompt('ESCOLHA --> '))
                    let num = Number(prompt('Agora informe o NÚMERO da sua operação --> '));
                    let expoente = Number(prompt('Informe o EXPOENTE --> '))

                    switch(operacao){
                        case 1:
                            // math.pow calcula a potenciação
                            console.log(`A raiz ${expoente} de ${num} é = ${Math.pow(num, 1/expoente)}`); 
                            //fracionar o expoente, é processo contrário da potenciação = raiz
                            break
                        case 2:
                            console.log(`${num} elevado à ${expoente} é = ${Math.pow(num, expoente)}`);
                            break
                        default:
                            console.log('Opção inválida, tente novamente');
                    }

                }while(flag == false)
                break
                // opção avançada (fim)
            default:
                console.log('Opção inválida, tente novamente!');
                flag = false
        }
    }while(flag == false)
}