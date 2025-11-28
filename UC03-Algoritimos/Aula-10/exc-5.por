programa {inclua biblioteca Matematica
  real prod_compra//valor do produto
  cadeia percent //para informar o percentual
  real acrescimo //armazena o percentual do produto
  inteiro codigo
  cadeia tipo_pag //informar o que foi feito
  inteiro parcelas

  

  funcao inicio() {
    escreva("Informe o valor do produto: ")leia(prod_compra)
    escreva("\nAgora escolha a forma de pagamento conforme as opções abaixo: \n",
    "1 - AVISTA (DINHEIRO ou CHEQUE);\n",
    "2 - AVISTA (NO CARTÃO)\n",
    "3 - PARCELADO (em 2x)\n",
    "4 - PARCELADO (MAIS DE 3 VEZES)\n",
    "ESCOLHA = ")leia(codigo)

    se(codigo >=1 e codigo <=4){//checando se foi digitado corretamente a opção
      real total_compra//armazena o total do produto com ou sem desconto

      escolha(codigo){
        caso 1:
          tipo_pag = "AVISTA - DINHEIRO/CHEQUE"
          acrescimo = prod_compra*0.10
          total_compra = prod_compra - acrescimo
          percent = "desconto 10%" 
          pare
        caso 2:
          tipo_pag = "AVISTA - CARTÃO DE CRÉDITO"
          acrescimo = prod_compra*0.05
          total_compra = prod_compra - acrescimo
          percent = "desconto de 5%" 
          pare
        caso 3:
          acrescimo = 0
          total_compra = prod_compra
          percent = "SEM ACRESCIMO ou DESCONTO"
          tipo_pag = "PARCELAMENTO EM 2X - 2x de R$"+ (total_compra/2)
          pare
        caso 4:
          escreva("\nInforme o número de parcelas(3 ou mais): ")leia(parcelas)
          se(parcelas >= 3){//calculo das parcelas >= 3x
            acrescimo = prod_compra*0.10
            total_compra = prod_compra + acrescimo}
          percent = "acrescimento de 10%"
          tipo_pag = "PARCELAMENTO FEITO EM " + parcelas +" parcelas de R$"+ Matematica.arredondar((total_compra/parcelas),2)
          pare
      }
      Matematica.arredondar(prod_compra,2)
      Matematica.arredondar(total_compra,2)
      escreva("\n-----RESULTADO-----\n",
      "\nVALOR DO PRODUTO = R$",prod_compra,
      "\nOPÇÃO DE PAGAMENTO = ",tipo_pag,
      "\nACRESCIMO/DESCONTO = ",percent,
      "\nVALOR DO DESCONTO/ACRESCIMO = R$",acrescimo,
      "\nTOTAL A PAGAR = R$",total_compra)
    }
    senao{escreva("\nOPÇÃO DE PAGAMENTO INVÁLIDA, TENTE NOVAMENTE!")}
  }
}
