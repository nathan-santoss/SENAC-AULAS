programa {
  inteiro vetor1[10], vetor2[10]
  inteiro i, posicao1, posicao2, soma
  funcao inicio() {
    
    para(i = 0; i < 5; i++){
      escreva("\nInforme a ",i+1,"° posição do PRIMEIRO vetor -> ")leia(posicao1)
      vetor1[i] = posicao1
    }
    para(i = 0; i < 5; i++){
      escreva("\nAgora a ",i+1,"° posição do SEGUNDO vetor -> ")leia(posicao2)
      vetor2[i] = posicao2
    }

    para(i = 0; i < 5; i++){
      soma = vetor1[i] + vetor2[i]
      escreva("\nA soma de ",vetor1[i]," + ",vetor2[i]," = ",soma)5
    }
  }
}
