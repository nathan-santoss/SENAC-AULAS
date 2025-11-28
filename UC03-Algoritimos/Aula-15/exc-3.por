programa {inclua biblioteca Util --> u
  inteiro matriz_1[3][4], matriz_2[3][4], resultados[3][4]
  inteiro num, i, j, n, soma = 0
  funcao inicio() {
    escreva("Digite 12 números para 1° matriz:\n") n = 1
    para(i = 0; i < 3; i++){
      para(j = 0; j < 4; j++){
        escreva("\nInforme o ", n,"° Número - > ")leia(num)
        matriz_1[i][j] = num
        n++
      }
    }
    u.aguarde(1000)
    limpa()
  
    escreva("\nAgora informe 12 números para 2° matriz:\n") n = 1
    para(i = 0; i < 3; i++){
      para(j = 0; j < 4; j++){
        escreva("\nInforme o ", n,"° Número - > ")leia(num)
        matriz_2[i][j] = num
        n++
      }
    }
    u.aguarde(1000)
    limpa()
    
    para(i = 0; i < 3; i++){
      para(j = 0; j < 4; j++){
        soma = matriz_1[i][j] + matriz_2[i][j]
        resultados[i][j] = soma
        escreva("\n",matriz_1[i][j]," + ",matriz_2[i][j], " = ",resultados[i][j])
      }
    }
    escreva("\n\n---- APURAÇÃO ----\n\n")
    escreva("1° MATRIZ => ")
    para(i = 0; i < 3; i++){para(j = 0; j < 4; j++){escreva(matriz_1[i][j]," || ")}}
    escreva("\n\n2° MATRIZ => ")
    para(i = 0; i < 3; i++){para(j = 0; j < 4; j++){escreva(matriz_2[i][j]," || ")}}
    escreva("\n\nRESULTADOS => ")
    para(i = 0; i < 3; i++){para(j = 0; j < 4; j++){escreva(resultados[i][j]," || ")}}
    

    
  }
}
