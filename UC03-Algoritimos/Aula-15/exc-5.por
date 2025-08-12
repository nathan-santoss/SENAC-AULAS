programa {
  real matriz[3][3], colunaResult[3], diagonal
  inteiro i, num, j, cont
  funcao inicio() {
    escreva("Informe 9 números a seguir:\n") cont = 1
    para(i = 0; i < 3; i++){
      para(j = 0; j < 3; j++){
        escreva("Informe o ",cont,"° número => ")leia(num)
        matriz[i][j] = num
      }
    }
    para(j = 0; j < 3; j++){
      colunaResult[j] = 0 // coluna 0 recebe 0 (j++)
      para(i = 0; i < 3; i++){
        colunaResult[j] = colunaResult[j] + matriz[i][j] // soma acumulativ
      }
    }
  }
}
