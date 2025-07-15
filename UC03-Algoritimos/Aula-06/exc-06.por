programa {

  real moedaBRL
  real DOLAR = 5.59
  real EURO = 6.48


  funcao inicio() {

    escreva("CASA DE CAMBIO", "\n")
    escreva("Vamos converter a moeda para DOLAR e EURO a seguir.", "\n")
    escreva("Digite o valor em REAIS (R$) para conversão: R$" )
    leia(moedaBRL)

    const real conversaoDOLAR = (moedaBRL * DOLAR)
    const real conversaoEURO = (moedaBRL * EURO)

    escreva(
      "\n", "O valor em DOLAR (US$) é = ", "R$", conversaoDOLAR, "\n",
      "O valor em EURO (€) é = ", conversaoEURO, "\n", "\n")

    escreva("Na casa de cambio com a taxa de IOF: ", "\n",
    "Total + taxa (DOLAR) =  ", "R$", (conversaoDOLAR * 1.10 ), "\n",
    "Total + taxa (EURO) =  ", "R$", (conversaoEURO * 1.10))


    

    
  }
}
