programa {
  inteiro chico = 150, juca = 110, i = 1
  inteiro tempo

  funcao inicio() {
    enquanto(juca <= chico){
      chico = chico+2
      juca = juca+3
      i++

      escreva(
        "\nTEMPO ATUAL = ", i,
        "\nCHICO -> ",chico," metros e  Juca ->",juca," metros"
      )
      se(juca == chico){pare}
    }
    escreva("\nLEVOU ",i," anos")
  }


}
