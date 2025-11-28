programa {inclua biblioteca Matematica
  real n1, n2
  inteiro operacao
  real resultado
  real potencia_n1, potencia_n2
  real raiz_n1, raiz_n2

  funcao inicio() {
    escreva("Informe o primeiro número: ")leia(n1)
    escreva("\nAgora informe o segundo número: ")leia(n2)
    escreva("Informe o operação matemática desejada: \n",
    "1 = soma\n",
    "2 = subtração\n",
    "3 = divisão\n",
    "4 = multiplicação\n",
    "5 = potência\n",
    "6 = raiz\n",
    "ESCOLHA = ")leia(operacao)
  
    escolha(operacao){
      caso 1:
        resultado = n1 + n2
        pare
      caso 2:
        resultado = n1 - n2
        pare
      caso 3:
        resultado = n1 / n2
        pare
      caso 4:
        resultado = n1*n2
        pare
      caso 5:
        inteiro potencia
          escreva("Informe a potencia para os números n1 e n2: ")leia(potencia)
          potencia_n1 = Matematica.potencia(n1, potencia)
          potencia_n2 = Matematica.potencia(n2, potencia)
          pare
      caso 6:
        inteiro raiz
          escreva("Informe a raiz para n1 e n2: ")leia(raiz)
          raiz_n1 = Matematica.raiz(n1, raiz)
          raiz_n2 = Matematica.raiz(n1, raiz)
          pare
    }//AQUI O USUÁRIO JÁ FINALIZOU SUA ESCOLHA

    se(operacao >= 1 e operacao <= 6){
      se(operacao == 5){/*impressão personalizada*/
        escreva("\nRESULTADO:",
        "\nN1 -> ",potencia_n1,
        "\nN2 -> ", potencia_n2)
      }
      senao se(operacao == 6){/*impressão personalizada*/
        escreva("\nRESULTADO:",
        "\nN1 -> ", raiz_n1,
        "\nN2 -> ", raiz_n2)
      }
    senao{
        escreva("\nRESULTADO: ",
        resultado)
      }
    }
    senao{escreva("\nOPÇÃO INVÁLIDA, ESCOLHA DE 1 À 6")}
  
  }
}
