programa {inclua biblioteca Matematica

  real salario
  real bonus
  real tempo
  real percentual 

  
  funcao inicio() {
    escreva("Digite o salário do funcionário em reais: R$","\n")
    leia(salario)

    escreva("Informe o tempo de empresa do mesmo: ", "\n")
    leia(tempo)

    
    se(tempo >=5){real percentual = 0.20
      bonus = (salario * percentual)
      
      
    }
    senao{ real percentual = 0.10
      bonus = (salario * percentual)
      

    }
    real total_recebido = salario + bonus
  
    escreva(
        "SALÁRIO DO FUNCIONÁRIO = R$",Matematica.arredondar(salario, 2),"\n",
        "TEMPO DE EMPRESA = ", tempo, " ano(s)","\n",
        "PERCENTUAL DO BONUS = ",percentual*100, "%","\n",
        "VALOR DO BONUS = R$",Matematica.arredondar(bonus, 2),"\n",
        "TOTAL RECEBIDO = R$",Matematica.arredondar(total_recebido, 2)
      )
  }
}