programa {
  inteiro n1,n2, mult
  inteiro i = 1
  funcao inicio() {
    faca{
      
      escreva("\nInforme o primeiro valor -> ")leia(n1)

      se(n1 > 50 e n1 < 150){
        enquanto(i != 2){
          escreva("\nInforme o segundo valor -> ")leia(n2)
          se(n2 > 50 e n2 < 150){
            mult = n1 * n2
            escreva("\nO produto dos dois números é = ",mult)
            i++}
          senao{escreva("\nVALOR INVÁLIDO, TENTE NOVAMENTE! \n")}}
      }
      senao{escreva("\nVALOR INVÁLIDO, TENTE NOVAMENTE! \n")}

    }enquanto(i != 2)
  }
}
