programa {
  inteiro num, maior = 0, menor = 0
  funcao inicio() {
    enquanto(num != -1){
      escreva("\nInforme um número -> ")leia(num)    
        se(num >= maior){maior = num} // num é maior que o maior anterior, então ele é o novo "maior"
        senao se(num > 0 e num != menor){menor = num} // num precisa ser maior que zero e diferente de zero (inicial)
        // garante que não vá comparar números negativos, só positivos
      } 

    escreva(
      "\nMAIOR número -> ", maior,
      "\nMENOR número -> ", menor
    )
    
  }
}
