import promptSync from 'prompt-sync'
const prompt = promptSync()

export default function(){
    console.log(`
        [------ Controle de Gastos ------]\n
        Informe seu salário abaixo.`);
    let salario = Number(prompt('----> '))
    let despesa
    let valor
    let total = 0
    let maiorGasto = 0 // gravar o valor do maior gasto
    let diaGasto = 0 // gravar o dia 
    let situacao // se economizou ou gastou mais
    let comparativo
    console.log(`
        Agora você irá informar 1 gasto por dia\n
        Digite o que foi a despesa e em seguida, o valor em REAIS`);
    for(let i = 0; i < 30; i++){
        console.log(`
            Dia ${i+1}\n`);
        console.log('DESPESA');
        despesa = prompt('---> ')
        console.log('VALOR');
        valor = Number(prompt('--->R$'))
        if(despesa.trim() !== "" && valor >= 0){
            total = total + valor
            if(valor > maiorGasto){
                maiorGasto = valor
                diaGasto = i+1
            }
            if(total < salario){
                situacao = 'ECONOMIZOU'
                comparativo = ' (+)'
            }
            else if(total > salario){
                situacao = 'GASTOU MAIS'
                comparativo = ' (-)'
            }
            console.clear()
        }
        else{
            console.clear()
            console.log('PREENCHIMENTO INCORRETO!');
            i--}
    }
    console.log(`
        [------ Apuração ------]\n
        Nesse mês o usuário ${situacao} em comparação ao salário de R$${salario.toFixed(2)}\n
        Gasto total = R$${total.toFixed(2)}
        Comparativo = ${comparativo} R$${(salario-total).toFixed(2)}\n
        Dia do maior gasto --> dia ${diaGasto} (R$${maiorGasto.toFixed(2)})`);
}