programa {
  cadeia nome
  inteiro idade
  inteiro acrescimo

  funcao inicio() {
    escreva("Informe seu nome: ")leia(nome)
    escreva("\nAgora informe sua idade: ")leia(idade)

    se(idade <=10){
      acrescimo = 30
    }
    senao se(idade > 10 e idade <=29){
      acrescimo = 60
    }
    senao se(idade >29 e idade <=45){
      acrescimo = 120
    }
    senao se(idade >45 e idade <=59){
      acrescimo = 150
    }
    senao se(idade > 59){
      acrescimo = 300
    }
    
    escreva(nome," terá um acrescimo de R$",acrescimo)
  }
}
