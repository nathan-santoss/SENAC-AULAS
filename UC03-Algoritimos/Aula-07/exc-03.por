/* 3. Faça um Programa que peça 2 números inteiros e um
    número real. Calcule e mostre:

    -> O produto do dobro do primeiro com metade do
    segundo;

    -> A soma do triplo do primeiro com o terceiro;

    -> O terceiro elevado ao cubo. */


programa {

  inteiro n1
  inteiro n2
  real n3



  funcao inicio() {
    
    escreva("Insira o primeiro número: ")
    leia(n1)

    escreva("Segundo número: ")
    leia(n2)

    escreva("Terceiro número: ")
    leia(n3)

    real resultadoA = ((n1 * 2) / (n2 / 2))
    real resultadoB = ((n1 * 3) + n3)
    real resultadoC = (n3 * n3 * n3)

    escreva("O produto do dobro do primeiro com metade do segundo = ", resultadoA, "\n",
    "A soma do triplo do primeiro com o terceiro = ", resultadoB, "\n",
    "O terceiro elevado ao cubo = ", resultadoC)


  }
}
