programa {

  cadeia produto
  inteiro codigo
  cadeia tipo
  

  funcao inicio() {
    escreva("Informe o nome o do produto: ")leia(produto)
    escreva("\nAgora informe o código do mesmo: ")leia(codigo)


    escolha(codigo){
      caso 1:
        tipo = "Alimento não-perecível"
        pare
      caso 2: caso 3: caso 4:
        tipo = "Alimento perecível"
        pare
      caso 5: caso 6:
        tipo = "Vestuário"
        pare
      caso 7: 
        tipo = "Higiene pessoal"
        pare
      caso 8: caso 9: caso 10:
        tipo = "Utensílios domésticos"
        pare
    }
    escreva("\n---- RESULTADOS ----\n",
      "O código ", codigo," faz referência ao tipo -> ",tipo,"\n")
  }
}
