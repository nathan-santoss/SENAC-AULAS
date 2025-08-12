programa {inclua biblioteca Util --> u
  inteiro matriz_1[6][3], matriz_2[6][3]
  inteiro i, j, cont, menor, num
  inteiro menorLinha, menorColuna
  funcao inicio() {

    escreva("Preencha 18 números na 1° matriz:\n") cont = 1
    para(i = 0; i < 6; i++){ // estrutura para armazenar os números na matriz 1
      para(j = 0; j < 3; j++){
        escreva("\nInforme o ", cont,"° número -> ")leia(num) 
        matriz_1[i][j] = num
        cont++
      }
    }menor = num
    
    para(i = 0; i < 6; i++){ // Comparando o menor número
      para(j = 0; j < 3; j++){
        se(matriz_1[i][j] <= menor){ 
          menor = matriz_1[i][j]
          menorLinha = i+1 //depois de encontrado o menor, marcando a menor linha e coluna (posicao)
          menorColuna = j+1
        }
      }
    }
    u.aguarde(6000)
    limpa()

    escreva("A 1° matriz ficou assim: \n\n")
    para(i = 0; i < 6; i++){
      para(j = 0; j < 3; j++){
        escreva(matriz_1[i][j]," | ")
      }
      escreva("\n")
    }

    escreva("\nO menor número é (",menor,") e está localizado na linha ",menorLinha," com a coluna ",menorColuna)
    // Finalizado o processo para achar o menor da matriz 1

    escreva("\n\nPreencha 18 números na 2° matriz:\n\n") cont = 1
    para(i = 0; i < 6; i++){
      para(j = 0; j < 3; j++){
        escreva("\nInforme o ", cont,"° número -> ")leia(num) 
        matriz_2[i][j] = num
        cont++
      }
    }
    menor = num // definindo o menor número para o último digitado naquela matriz

    para(i = 0; i < 6; i++){
      para(j = 0; j < 3; j++){
        se(matriz_2[i][j] <= menor){
          menor = matriz_2[i][j]
          menorLinha = i+1
          menorColuna = j+1
        }
      }
    }
    u.aguarde(6000)
    limpa()

    escreva("A 2° matriz ficou assim: \n\n")
    para(i = 0; i < 6; i++){
      para(j = 0; j < 3; j++){
        escreva(matriz_1[i][j]," | ")
      }
      escreva("\n")
    }

    escreva("\nO menor número é (",menor,") e está localizado na linha ",menorLinha," com a coluna ",menorColuna)
  }
}
