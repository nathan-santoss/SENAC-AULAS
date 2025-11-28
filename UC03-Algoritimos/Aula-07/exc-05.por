/* 5. Tendo como dado de entrada a altura (A) de uma pessoa,
    construa um algoritmo que calcule seu peso ideal, utilizando as
    seguintes fórmulas:

    -> Para homens: (72.7 * A) - 58
    -> Para mulheres: (62.1 * A) - 44.7 */


programa {

  real altura
  

  funcao inicio() {
    
    escreva("Para saber o peso ideal do gênero, digite um valor em metros (ex: 1.80): ")
    leia(altura)

    real resultadoA = (72.7 * altura) - 58
    real resultadoB = (62.1 * altura) - 44.7

    escreva("Para homens o peso ideal dessa altura é em torno de ", resultadoA,"Kg", "\n",
    "Para mulheres seria ", resultadoB,"Kg")

  }
}
