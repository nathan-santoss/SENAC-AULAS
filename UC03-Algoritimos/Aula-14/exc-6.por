programa {inclua biblioteca Tipos --> t
  inteiro valores[5]
  inteiro num, i, menor, posicao
  inteiro posterior, anterior
  funcao inicio() {

    para(i = 0; i < 5; i++){
      escreva("Informe o ",i+1,"° valor -> ")leia(num)
      valores[i] = num
      menor = num
    }
    
    para(i = 0; i < 5; i++){
      se(menor >= valores[i]){
        menor = valores[i]  
        posicao = i
      }
    }

    escreva("\nO menor valor é = ",menor)

    se(menor == valores[0]){
      escreva("\nO número não possui anterior\n")
    }
    senao{  
      anterior = valores[posicao-1]
      escreva("\nO número anterior é = ",anterior)
    }

    se(menor == valores[4]){
      escreva("\nO número não possui posterior\n")
    }
    senao{
      posterior = valores[posicao+1]
      escreva("\nO número posterior é = ",posterior)
    }

  }
}
