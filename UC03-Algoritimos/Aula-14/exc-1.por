programa {
  inteiro num, quantidade, i
  funcao inicio() {
    escreva("Informe a quantidade de números = ")leia(quantidade)
    inteiro numeros[quantidade]

    para(i = 0; i < quantidade; i++){
      escreva("\nDigite um número -> ")leia(num)
      numeros[i] = num
    }
    escreva("\nOs números informados na ordem digitada = ",numeros)
    
    escreva("\na ordem contrária é = ")
    para(i = quantidade -1; i >= 0; i--){
        escreva(numeros[i],",")
    }
    
  }
}
