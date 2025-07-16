programa {inclua biblioteca Matematica

  real pinturaMetros
  real lataDeTinta = 80
  inteiro litro_lata = 18


  funcao inicio() {
    
    escreva("Qual o tamanho da parede em metros quadrados que deseja pintar? ", "\n")
    leia(pinturaMetros)

    real litro_por_metro = pinturaMetros / 3
    inteiro latas_necessarias = (litro_por_metro / litro_lata) + 1
    real gasto_total = latas_necessarias * lataDeTinta

    escreva("A parede tem ", pinturaMetros,"m². Então será necessário ", Matematica.arredondar(litro_por_metro, 2),"m² para pintar.", "\n" )

    escreva("\n", "RESULTADO FINAL: ", "\n")
    escreva("VALOR DA LATA = R$", lataDeTinta, "\n")
    escreva("LATAS NECESSÁRIAS = ", latas_necessarias, "\n")
    escreva("TOTAL A PAGAR = R$", gasto_total)
  



    

  }
}
