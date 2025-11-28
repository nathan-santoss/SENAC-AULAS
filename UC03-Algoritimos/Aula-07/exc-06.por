/* 6. Faça um Programa que pergunte quanto você ganha por
    hora e o número de horas trabalhadas no mês. Calcule e
    mostre o total do seu salário no referido mês, sabendo-se que
    são descontados 11% para o Imposto de Renda, 8% para o
    INSS e 5% para o sindicato, faça um programa que nos dê:

    -> salário bruto;
    -> quanto pagou de IR;
    -> quanto pagou ao INSS;
    -> quanto pagou ao sindicato;
    -> o salário líquido;
    -> calcule os descontos e o salário líquido.
*/

programa {inclua biblioteca Matematica
  real salarioHora
  real horasT
  inteiro minutosT
  inteiro diasTrabalhados



  funcao inicio() {

    escreva("Digite o valor da sua hora de trabalho: ", "\n")
    leia(salarioHora)

    escreva("Agora digite quantas HORAS por dia você trabalha", "\n")
    leia(horasT)

    escreva("Agora digite os MINUTOS", "\n")
    leia(minutosT)

    real valorDia = horasT + (minutosT / 60)
    escreva("Quantos dias trabalhados no mês? ", "\n")
    leia(diasTrabalhados)

  
    real salario = ((salarioHora) * (valorDia) * diasTrabalhados)
    real resultadoIR = ((salario / 100) * 11)
    real resultadoINSS = ((salario / 100) * 8)
    real resultadoSIND = ((salario / 100) * 5)
    real totalDESC = (resultadoIR + resultadoINSS + resultadoSIND)
    real salarioLiq = salario - totalDESC


    

    escreva("CALCULANDO DESCONTOS... RESULTADOS ABAIXO:", "\n")

    escreva("Salário bruto = R$", Matematica.arredondar(salario, 2), "\n")
    escreva("Valor pago no IMPOSTO DE RENDA = R$", Matematica.arredondar(resultadoIR, 2), "\n")
    escreva("Valor pago no INSS = R$", Matematica.arredondar(resultadoINSS, 2), "\n")
    escreva("Valor pago no SINDICATO = R$", Matematica.arredondar(resultadoSIND, 2), "\n")
    escreva("VALOR TOTAL EM DESCONTOS = R$", Matematica.arredondar(totalDESC, 2), "\n")
    escreva("Seu salário líquido após os descontos é de R$", Matematica.arredondar(salarioLiq, 2), "\n")
    
    
    
    
    
    
    
    
  }
}
