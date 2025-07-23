programa {

  inteiro n1,n2,n3
  inteiro menor
  inteiro medio
  inteiro maior

  funcao inicio() {

    escreva("Informe (respectivamente) 3 números abaixo\n")
    leia(n1)
    leia(n2)
    leia(n3)

    se((n1 == n2 ou n1 == n3) ou (n3 == n2)){
      escreva("OS NÚMEROS INTEIROS NÃO PODEM REPETIR, TENTE NOVAMENTE\n")
    }
    senao{
      se(n1 > n2 e n1 > n3){ //n1 maior de todos
        maior = n1
        se(n2 > n3){
          menor = n3
          medio = n2
          }senao{
            menor = n2
            medio = n3
          }
      }
      senao se(n2 > n1 e n2 > n3){
        maior = n2
        se(n1 > n3){
          medio = n1
          menor = n3
        }senao{
          menor = n1
          medio = n3
        }
      }
      senao{
        maior = n3
        se(n2 > n1){
          medio = n2
          menor = n1
        }
      }


      escreva("A ordem descrecente fica\n")
      escreva(
        "Maior -> ", maior,
        "\nMédio -> ", medio,
        "\nMenor -> ", menor)
    }
    

    

  }
    
  }

