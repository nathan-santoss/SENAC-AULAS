programa {
  real lado_a
  real lado_b
  real lado_c
  cadeia tipo_triangulo

  funcao inicio() {
    escreva("Me informe o valor dos lados dos triângulos para resolução.")
    escreva("Digite o valor do lado A = ")leia(lado_a)
    escreva("Digite o valor de lado B = ")leia(lado_b)
    escreva("Para finalizar, digite o lado C = ")leia(lado_c)

    se (lado_a == lado_b e lado_a == lado_c){ // Lado A é IGUAL a todos? 
      tipo_triangulo = "Triângulo EQUILÁTERO" 
    }

    senao se(lado_a != lado_b e lado_a != lado_c){ //Lado A é DIFERENTE de todos?
      tipo_triangulo = "Triângulo ESCALENO"
    }

    senao se(lado_a != lado_b ou lado_a != lado_c){// Lado A parece com pelo menos ALGUM deles?
      se(lado_a == lado_b ou lado_a == lado_c){
        tipo_triangulo = "Triângulo ISÓSCELES"
      }
      senao{tipo_triangulo = "Triangulo ISÓSCELES"}
    }

    senao{escreva("VALORES INVÁLIDS, DIGITE NOVAMENTE")}// Se não, então digitou errado.

    escreva(tipo_triangulo)
  }
}
