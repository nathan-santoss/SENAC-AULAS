programa {
  inteiro n1,n2, i = 1, divisao
  funcao inicio() {
    escreva("Os valores inseridos NÃO podem ser = 0")
    
    faca{
      escreva("\nInforme o ",i,"° valor -> ")leia(n1)
      se(n1 == 0){escreva("\nO número digitado não é válido, tente novamente")}

      senao{i++
      escreva("\nInforme o ",i,"° valor -> ")leia(n2)
      divisao = n1/n2
      escreva("\nO resultado da divisão é = ",divisao)}

    }enquanto(i != 2)
  }
}
