programa {inclua biblioteca Util --> u

  real matriz[3][3], colunaResult[3], diagonal = 0
  inteiro i, num, j, cont

  funcao inicio() {

    escreva("Informe 9 números a seguir:\n\n") cont = 1
    para(i = 0; i < 3; i++){
      para(j = 0; j < 3; j++){
        escreva("Informe o ",cont,"° número => ")leia(num)
        matriz[i][j] = num
        cont++
      }
    }
    para(j = 0; j < 3; j++){
      colunaResult[j] = 0 // coluna 0 recebe 0 (j++)
      para(i = 0; i < 3; i++){
        colunaResult[j] = colunaResult[j] + matriz[i][j] // soma acumulativ
      }
    }//Processo de calcular em colunas finalizado

    diagonal = matriz[0][0] + matriz[1][1] + matriz[2][2]
    u.aguarde(2000)
    limpa()
    
    escreva("A matriz ficou assim:\n")
    para(i = 0; i < 3; i++){
      para(j = 0; j < 3; j++){
        escreva(matriz[i][j], " | ")
      }
      escreva("\n")
    } 
    escreva("\nSoma da diagonal principal é = ", diagonal)
    escreva("\nA soma das colunas é = ")
    para(j = 0; j < 3; j++){
      escreva(colunaResult[j]," | ")
    }
  }
}