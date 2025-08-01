programa {
  inteiro pais_A = 80000, pais_B = 200000, i =0
  
  funcao inicio() {
    escreva(
        "\nANO ATUAL = 200",i,
        "\nPAIS A com população = ",pais_A," habitantes;",
        "\nPAIS B com população = ",pais_B," habitantes.\n"
      )
    enquanto(verdadeiro){
      pais_A = pais_A +(pais_A * (3/ 100))
      pais_B = pais_B +(pais_B * (1.5/ 100))
      i++
      escreva(
        "\nANO ATUAL = 200",i,
        "\nPAIS A com população = ",pais_A," habitantes;",
        "\nPAIS B com população = ",pais_B," habitantes.\n"
      )
      se(pais_A >= pais_B){pare}
    }
    escreva("\nO tempo que levou foi ",i, " anos")
  }
}
