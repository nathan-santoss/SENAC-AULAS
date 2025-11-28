programa {

  inteiro numero1

  funcao inicio() {
    escreva("Insira o número: ")
    leia(numero1)

    se (numero1 < 50){
      ((numero1 *2) + numero1)

      escreva("O número é menor que 50, então o resultado é = ", numero1)
    }

    senao {
      (numero1 - (numero1 *3))

      escreva("O número é maior que 50, então o resultado é = ", numero1)
    }
  }
}
