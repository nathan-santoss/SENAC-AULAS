/*  2. Crie um algoritmo para Boleto de Pagamento: 

  -> Elabore um programa que gere um boleto de
pagamento.

  -> Solicite ao usuário que insira o nome do beneficiário, o
valor do boleto e a data de vencimento.

  -> Exiba essas informações formatadas na tela.    */


programa {

  cadeia beneficiario
  real valorPagamento
  cadeia dataVencimentoBoleto

  

  funcao inicio() {

    escreva("GERADOR DE BOLETOS PARA DEPÓSITO")
    escreva("\n", "Digite o nome do beneficiário do boleto: ")
    leia(beneficiario)
  
    escreva("\n", "Insira o valor do depósito: ")
    leia(valorPagamento)

    escreva("\n", "Selecione a data de vencimento", "\n", "ATENÇÃO: formato utilizado ao formato data DD.MM.AA", "\n")
    leia(dataVencimentoBoleto)

    escreva("\n", "CONFIRA OS DADOS DO DEPÓSITO ABAIXO:")

    escreva(
      "\n", "BENEFICIÁRIO: ", beneficiario,
      "\n", "VALOR DO DEPÓSITO: ", valorPagamento,
      "\n", "VENCIMENTO DO BOLETO: ", dataVencimentoBoleto
    )


  }
}
