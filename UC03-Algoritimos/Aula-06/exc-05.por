/* 5. Crie um algoritmo para Cálculo de Média:
  
  -> Desenvolva um programa que peça ao usuário para
  digitar três notas e calcule a média delas.

  -> Em seguida, exiba a média na tela. */


programa {

  real n1
  real n2
  real n3
  
  

  funcao inicio() {
    
    escreva("CALCULADORA DE MÉDIA", "\n")
    escreva("Iremos calcular a média entre 3 números. Digite logo abaixo:", "\n")

    escreva("Primeiro número: ")
    leia(n1)

    escreva("Segundo número: ")
    leia(n2)

    escreva("Terceiro número: ")
    leia(n3)

    real mediaResultado = ((n1 + n2 + n3) / 3) 

    escreva("\n", "O resultado da média entre os números é = ", mediaResultado) 
  }
}
