/*  2. Faça um programa de avaliação para determinada
disciplina, a qual, é composto por três provas.

- Receba 3 notas do usuário;

- Calcule sua média;

- A primeira prova tem peso 2, a segunda prova tem
peso 3, a terceira prova tem peso 5;

- Mostre a média final do aluno desta disciplina   */


programa {
  
  real nota1
  real nota2
  real nota3

  funcao inicio() {
    
    escreva("Insira as notas do aluno(a)", "\n")
    escreva("Primeira nota: ")
    leia(nota1)
    
    escreva("Segunda nota: ")
    leia(nota2)
    
    escreva("Terceira nota: ")
    leia(nota3)
    
    real resultadoNotas = (((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5))

    escreva("A média ponderada do aluno é =  ")
    escreva(resultadoNotas)
    

  }
}
