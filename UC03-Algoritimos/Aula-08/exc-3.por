programa {
inclua biblioteca Matematica 
  real n1
  real n2

  funcao inicio() {
    escreva("Me informe o primeiro número","\n")
    leia(n1)

    escreva("Me informe o segundo número","\n")
    leia(n2)

    inteiro calculo

    se (n2 == 0 e n1 == 0){
      escreva("Zero e zero NÃO é multiplo de ninguém")
    }
    // Preciso saber de os dois são zeros antes de calcular, porque dá erro. Não é possível dividir zero por zero.
    se ((n1 == Matematica.arredondar(n1, 2)) e n2 == 0){ // Aqui identifica se o número é real ou inteiro. Se = real, então = não multiplo
      escreva("Os número NÃO são múltiplos")
    }
    senao {
      inteiro calculo = n1 % n2

        
    se (calculo != 0){
     escreva("Os números NÃO são múltiplos.")
      }

    senao {
      escreva("Os números são múltiplos.")
      } 
    }
    

    

    
  }
}
