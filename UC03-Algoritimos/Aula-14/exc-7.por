programa {inclua biblioteca Matematica --> m
  real num, i, qtde, soma = 0, media
  real acima, abaixo
  funcao inicio() {
    escreva("Informe a quantidade de números a serem digitados -> ")leia(qtde)
    real numeros[qtde]
    para(i = 0; i < qtde; i++){
      escreva("\ndigite o ",i+1,"° número = ")leia(num)
      numeros[i] = num
    }
    escreva("\nNosso vetor ficou = ",numeros)

    para(i = 0; i < qtde; i++){
      soma = numeros[i] + soma
    }
    media = soma/qtde
    escreva("\nA média é = ", m.arredondar(media,2))

    para(i = 0; i < qtde; i++){
      se(numeros[i] > media){
        acima = numeros[i]
      }
      senao se(numeros[i] < media){
        abaixo = numeros[i]
      }
    }
    escreva(
      "\nO número acima da média é = ",acima,
      "\nO número ABAIXO da média é = ",abaixo)

    

  }
    
    
}

