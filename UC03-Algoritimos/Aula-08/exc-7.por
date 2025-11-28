programa {
  inclua biblioteca Matematica
  inteiro n1, n2, n3


  funcao inicio() {
    
    escreva("Digite 3 números em seguida: ", "\n")
    leia(n1,n2,n3)

    se(n3 > Matematica.menor_numero(n1,n2) e n3 < Matematica.maior_numero(n1, n2)){
      escreva("N3 está entre N1 e N2")
    }
    senao{
      escreva("N3 não está entre N1 e N2")
    }
    

  }
}
