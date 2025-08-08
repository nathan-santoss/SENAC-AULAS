programa {
  cadeia nome, buscar
  inteiro total = 15, i
  funcao inicio() {

    cadeia nomes[total]

    para(i = 0; i < total; i++){
      escreva("\nInforme o nome do aluno(a) ")leia(nome)
      nomes[i] = nome
    }
    para(i = 0; i < total; i++){
      escreva("\nQual aluno você deseja checar na turma? ")leia(buscar)
      se(buscar == nomes[i]){
        escreva("\nO aluno faz parte da turma\n")
        pare
      }
      senao{escreva("\nO ALUNO NÃO FAZ PARTE DA TURMA\n") i = 0}
    }
    
    
  }
}
