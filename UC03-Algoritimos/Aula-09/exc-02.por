programa {

  cadeia nome
  inteiro codigo
  cadeia tipo

  funcao inicio() {
    escreva("Digite o código do produto: ")leia(codigo)

    se(codigo == 1){
      tipo = "\nCLASSIFICAÇÃO = Alimento não-perecível"
    }
    senao se(codigo == 2 ou codigo == 3 ou codigo == 4){
      tipo = "\nCLASSIFICAÇÃO = Alimento perecível"
    }
    senao se(codigo == 5 ou codigo == 6){
      tipo = "\nCLASSIFICAÇÃO = Vestuário"
    }
    senao se(codigo == 7){
      tipo = "\nCLASSIFICAÇÃO = Higiene Pessoal"
    }
    senao se(codigo == 8 ou codigo == 9 ou codigo == 10){
      tipo = "\nCLASSIFICAÇÃO = Utensílios domésticos"
    }
    senao{
      tipo = "\nCÓDIGO INVÁLIDO, CLASSIFICAÇÃO NÃO EXISTENTE!"
    }

    escreva(tipo)
    
  }
}
