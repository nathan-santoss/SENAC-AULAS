

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


    se (resultadoNotas>=7) {
    escreva("O aluno está aprovado")}

    se (resultadoNotas<7){
    escreva("O aluno está reprovado")}
    }
  }
}
