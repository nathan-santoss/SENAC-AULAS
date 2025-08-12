programa {
  inteiro matriz[4][4]
  inteiro num,i,j
  inteiro pares = 0, impares = 0, positivos = 0, negativos = 0
  inteiro contPares = 0, contImpares = 0, contPositivos = 0, contNegativos = 0
  inteiro vetPares[16], vetImpares[16], vetPositivos[16], vetNegativos[16]
  funcao inicio() {
    // I = Linhas
    // J = Colunas

    para(i = 0; i < 4; i++){
      para(j = 0; j < 4; j++){
        escreva("\nInforme o (",j+1,"°) número presente na (",i+1,"°) linha -> ")leia(num)
        matriz[i][j] = num
        
        se(num % 2 == 0){
          pares++
          vetPares[contPares] = num
          contPares++
        }
        senao{impares++
          vetImpares[contImpares] = num
          contImpares++
        }

        se(num >= 0){
          positivos++
          vetPositivos[contPositivos] = num
          contPositivos++
        }
        senao{negativos++
          vetNegativos[contNegativos] = num
          contNegativos++
        }
      }
    }
    
    


    escreva("\nO nosso vetor ficou assim: ")
    para(i = 0; i < 4; i++){
      escreva("\n", i+1, "° Linha = ")
      para(j = 0; j < 4; j++){
        escreva(matriz[i][j],"  ")
      }
    }

    escreva("\n\n------RESULTADOS------\n",
      "\nPositivos = (",positivos,") -> ")
    para(i = 0; i < contPositivos; i++){escreva(vetPositivos[i],"  ")}

    escreva("\nNegativos = (",negativos,") -> ")
    para(i = 0; i < contNegativos; i++){escreva(vetNegativos[i],"  ")}

    escreva("\nPares = (",pares,") -> ")
    para(i = 0; i < contPares; i++){escreva(vetPares[i],"  ")}

    escreva("\nImpares = (",impares,") -> ")
    para(i = 0; i < contImpares; i++){escreva(vetImpares[i],"  ")}

      
    

  }
}
