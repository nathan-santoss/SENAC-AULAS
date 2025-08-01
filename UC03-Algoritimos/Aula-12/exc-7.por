programa {
  inteiro i, quant, voto
  inteiro n_eleitores = 0, candidato_a = 0, candidato_b = 0, _NB = 0 //placares
  funcao inicio() {
    escreva("\nQuantos eleitores irão votar? ")leia(quant)
    se(quant >= 0) // só irá processeguir se digitar um número positivo
    {escreva("\nOs votos são contabilizados conforme a numeração digitada;\n","Caso não escolha uma das opções, o voto será NULO/BRANCO.\n")
      i = 1 // prioridade do eleitor
      enquanto(i <= quant){ // repete dependendo do número de eleitores
        escreva(
          "\n(1) = CANDIDATO 'A' || (2) CANDIDATO 'B'",
          "\n Informe o voto do ",i,"° eleitor = "
        ) leia(voto)
        escolha(voto){ //estrutura de contabilização
          caso 1:
            escreva(" -> (Você votou no candidato A) <-\n")
            candidato_a++
            pare
          caso 2:
            escreva(" -> (Você votou no candidato B) <-\n")
            candidato_b++ 
            pare
          caso contrario:
            escreva(" -> (Você votou Nulo/Branco) <-\n")
            _NB++ 
            pare
        }
        i++ //passa a prioridade para o próximo e evita 'i' ficar em 1 e seguir o fluxo da quantidade
      }
      escreva(
        "\n-----RESULTADOS-----\n",
        "CANDIDATO A teve = ",candidato_a," votos",
        "\nCANDIDATO B teve = ",candidato_b," votos",
        "\nNULOS/BRANCOS = ",_NB, " votos"
      )
    }senao{escreva("\nINFORME UM NÚMERO VÁLIDO DE ELEITORES\n")}
  }  
}

