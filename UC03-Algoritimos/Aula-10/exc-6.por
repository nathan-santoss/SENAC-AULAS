programa {
  inclua biblioteca Matematica

  inteiro combustivel //usuario escolhe o combustível
  cadeia valor_comb //string para saída
  real capacidadeMax
  real pag_total //valor total


  funcao inicio() {
    escreva("---HORA DE ABASTECER---\n",
    "Informe o tipo do combustível sendo:\n",
    "(1) Gasolina = R$6.27",
    "\n(2) Àlcool = R$5.08",
    "\nESCOLHA: ")leia(combustivel)

    se(combustivel == 1 ou combustivel == 2){//obriga a escolha do tipo do combustível corretamente
      inteiro pag_selec
      cadeia combustivel_tipo
      escreva("\nAgora informe a capacidade do tanque (em litros): ")leia(capacidadeMax)
      escreva("\nFORMA DE PAGAMENTO: \n",
      "(1) -> PIX\n",
      "(2) -> CARTÃO\n", "ESCOLHA: ")leia(pag_selec)

        cadeia desc_string
        real desc
        cadeia tipo_pag

      escolha(combustivel){//condição para o tipo do combustível escolhido
        caso 1:
          combustivel_tipo = "GASOLINA"
          pag_total = capacidadeMax*6.27           
          valor_comb = "6.27"
          pare
        caso 2:
          combustivel_tipo = "ÁLCOOL"
          pag_total = capacidadeMax*5.08            
          valor_comb = "5.08"
          pare
      }
      escolha(pag_selec){//condição para o tipo do pagamento

        caso 1: //impressão dos resultados COM desconto
          tipo_pag = "PIX"
          desc = 0.03
          desc_string = "DESCONTO DE 3%"
          escreva(
            "\n------RESULTADO------\n",
            "\nCOMBUSTÍVEL SELECIONADO -> ",combustivel_tipo,
            "\nPREÇO DO COMBUSTÍVEL SELECIONADO = R$",valor_comb,
            "\nMÉTODO DE PAGAMENTO -> ",tipo_pag,
            "\nCAPACIDADE DO TANQUE -> ", Matematica.arredondar(capacidadeMax,2)," litro(s)",
            "\nTOTAL À PAGAR = R$",Matematica.arredondar(pag_total,2),
            "\nDESCONTO(PIX) = R$",Matematica.arredondar((pag_total*desc),2),
            "\nTOTAL COM DESCONTO = R$",Matematica.arredondar((pag_total-(pag_total*desc)),2))
          pare
        caso 2: //impressão dos resultados sem desconto
          tipo_pag = "CARTÃO"
          pag_total = pag_total
          desc_string = "SEM DESCONTO"
          escreva(
            "\n------RESULTADO------\n",
            "\nCOMBUSTÍVEL SELECIONADO -> ",combustivel_tipo,
            "\nPREÇO DO COMBUSTÍVEL SELECIONADO = R$",valor_comb,
            "\nMÉTODO DE PAGAMENTO -> ",tipo_pag,
            "\nCAPACIDADE DO TANQUE -> ", Matematica.arredondar(capacidadeMax,2)," litro(s)",
            "\nTOTAL À PAGAR = R$",Matematica.arredondar(pag_total,2))
          pare
        caso contrario: //usuário não escolheu a forma de pagamento corretamente
          escreva("OPÇÃO DE PAGAMENTO INVÁLIDA!")
      }
    }
    senao{escreva("OPÇÃO INVÁLIDA, TENTE NOVAMENTE.")}//nao selecionou corretamente o tipo do combustível

  }
}
