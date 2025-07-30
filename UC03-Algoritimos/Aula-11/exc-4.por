programa {
  inteiro num
  funcao inicio() {
    escreva("Informe um número para fatorar: ")leia(num)

    se(num < 0){escreva("\nOPÇÃO INVÁLIDA, O NÚMERO É NEGATIVO")}
    senao{
      inteiro i = num
      para(i ; i >= 1; i--){
        inteiro mult = i*num
        escreva(num, " x ", i, " = ", mult,"\n")
      }
    }
  }
}
