programa {
  inteiro quant, idade
  inteiro i, soma = 0, media
  cadeia turma_tipo
  funcao inicio() {
    escreva("Informe quantas pessoas existem na turma: ")leia(quant)
    i = 1
    enquanto(i <= quant){
      escreva("\nInforme a idade do ",i,"° aluno(a) -> ")leia(idade)
      se(idade < 0){pare}
      senao{soma = soma + idade
        media = soma/quant
        se(media <= 25){turma_tipo = "JOVEM"}
        senao se(media >= 26 e media <= 60){turma_tipo = "ADULTA"}
        senao{turma_tipo = "IDOSA"}
        i++
      }    
    }
    escreva(
      "\nNúmero de alunos que responderam = ",quant,
      "\nPredominancia = ", turma_tipo,
      "\nMÉDIA da idade da turma = ", media
    )
    
  }
}
