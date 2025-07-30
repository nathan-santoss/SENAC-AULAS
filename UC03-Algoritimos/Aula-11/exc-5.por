programa {
  inteiro i, mult =1, soma =1
  funcao inicio() {
    escreva("Rainha, segue a contagem das casas e grãos: \n")
    escreva("casa 1 = 1 grãos\n")
    para(i = 2; i <= 16; i++){
      mult = mult*2
      soma = mult+soma
      escreva("casa ",i, " = ", (mult)," grãos\n")
    }
    escreva("\nTotal de grãos que a rainha deve pagar = ", soma)


  }
}
