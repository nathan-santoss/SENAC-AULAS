
/* 3. Crie um pseudocódigo:

  -> Que receba 2 números;

  -> Calcule as operações básicas (soma, subtração,
  multiplicação e divisão);

  -> Mostre o resultado na tela. */


programa {

  real n1
  real n2

  funcao inicio() {

    escreva("Digite dois números e faremos as operações básicas com eles", "\n")
    escreva("Primeiro número:  ", "\n")
    leia(n1)
    escreva("Segundo número:  ", "\n")
    leia(n2)


    escreva("\n", "RESULTADO")

    escreva(
      "\n", "SOMA: ", n1, " + ", n2, " = ", n1 + n2,
      "\n", "SUBTRAÇÃO: ", n1, " - ", n2, " = ", n1 - n2,
      "\n", "DIVISÃO: ", n1, " / ", n2, " = ", n1 / n2,
      "\n", "MULTIPLICAÇÃO: ", n1, " * ", n2, " = ", n1 * n2)
  }
}
