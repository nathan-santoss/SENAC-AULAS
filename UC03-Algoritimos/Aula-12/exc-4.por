programa {
  inteiro num, maior, menor, i = 1
  
  funcao inicio() {
    escreva("\nInforme o ",i,"° número -> ")leia(num)
    i++
    menor = num
    maior = num
    enquanto(num != -1){
      escreva("\nInforme o ",i,"° número -> ")leia(num)
      se(num > maior e num >=0){maior = num}
      senao se(num < menor e num >=0){menor = num}
    }
    escreva(
      "\nMAIOR número = ",maior,
      "\nMENOR número = ",menor
    )
    
  }
}
