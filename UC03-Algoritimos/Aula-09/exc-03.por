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

    se(lado_a == lado_b e lado_b == lado_c){
      tipo_triangulo = "Triângulo Equilátero\n"
    }

    senao se(lado_a == lado_b ou lado_a == lado_c){
      tipo_triangulo = "Triângulo Isósceles"
    }
    senao se(lado_c == lado_b ou lado_c == lado_a){
      tipo_triangulo = "Triângulo Isósceles"
    }
    senao se(lado_a != lado_b e lado_b != lado_c){
      tipo_triangulo = "Triângulo Escaleno"
    }


    senao{escreva("VALORES INVÁLIDOS, DIGITE NOVAMENTE")}// Se não, então digitou errado.

    escreva(tipo_triangulo)
  }
}
