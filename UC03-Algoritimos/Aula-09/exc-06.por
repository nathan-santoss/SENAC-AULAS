programa {inclua biblioteca Matematica
  real a, b, c
  real delta
  cadeia resultado

  funcao inicio() {
    escreva("Informe os valores das letras A, B e C (respectivamente) abaixo\n")
    leia(a)
    se(a == 0){escreva("\nA sendo = 0, então não é uma equação do segundo grau, tente outro número.")
    }
    senao{
      leia(b)
      leia(c)
      delta = Matematica.potencia(b, 2) - 4*a*c
      se (delta < 0){
        resultado = "Delta não possui raízes reais pois é = "
      }
      senao se(delta == 0){
        resultado = "Delta possui apenas uma raiz real pois é = "
      }
      senao se(delta > 0){
        resultado = "Delta possui duas raizes reais pois é = "
      }
      escreva(resultado,delta)
       
    }

  }
  }

