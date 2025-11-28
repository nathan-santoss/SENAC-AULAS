programa {
  inteiro i, num = 1
  inteiro soma = 0, mult = 1
  funcao inicio() {
    enquanto(num > 0){
      escreva("\nInforme um número -> ")leia(num)

      se(num%2 == 0 e num >= 0 ){soma = soma + num}
      senao se(num%2 != 0 e num >= 0){mult = mult * num}
      
      
    }
    escreva("\nSOMA = ",soma,
    "\nMULTIPLICAÇÃO = ",mult)
    
  }
}