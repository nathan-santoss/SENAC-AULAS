programa {
  cadeia nome, tipo
  inteiro i, j
  cadeia objetos[5][3]
  funcao inicio() {
    // i = linha
    // j = coluna
    para(i = 0; i < 5; i++){
      escreva("\nInforme o tipo do objeto -> ")leia(objetos[i][0])
      para(j = 1; j < 3; j++){        
        escreva("\nAgora diga qual é o ", j,"° objeto -> ")leia(objetos[i][j])
      }
    }

    escreva("\nA matriz ficou assim: \n")
    para(i = 0; i < 5; i++){
      escreva("\n\nTipo do objeto -> ")escreva(objetos[i][0])
      para(j = 1; j < 3; j++){        
        escreva("\nO ", j,"° objeto -> ")escreva(objetos[i][j])
      }
    }
  }
}
