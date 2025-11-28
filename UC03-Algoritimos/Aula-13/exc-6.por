programa {
  inclua biblioteca Util --> u

  cadeia nome
  real salario
  inteiro estado_civil, genero, idade
  

  funcao inicio() {
    escreva("Digite seu nome: ")leia(nome)
    faca{
      escreva("\nDigite corretamente os dados abaixo\n")
      escreva("\nIdade -> ")leia(idade)
      escreva("\nSalário -> ")leia(salario) 
      escreva("\nGenero\n [1] MASCULINO\n [2] FEMININO\nRESPOSTA -> ")leia(genero)
      escreva("\nEstado Civil\n [1] Solteiro(a)\n [2] Casado(a)\n [3] Viúvo(a)\nRESPOSTA -> ")leia(estado_civil)
      

      se(idade >= 0 e idade <= 100){
        se(salario > 0){
          se(genero == 1 ou genero == 2){
            se(estado_civil == 1 ou estado_civil == 2 ou estado_civil == 3){
              escreva("\nSUAS INFORMAÇÕES SÃO VÁLIDAS, PODE PROSSEGUIR!\n")
              pare
            }
            senao{escreva("\nEstado cívil inválido, escolha uma das opções numéricas\n")
            u.aguarde(3000)
            limpa()}
          }
          senao{escreva("\nGenero inválido, escolha uma das opções numéricas\n")
          u.aguarde(3000)
          limpa()}
        }
        senao{escreva("\nO salário informado é inválido\n")
        u.aguarde(3000)
        limpa()}
      }
      senao{escreva("\nIdade inválida, digite um valor entre 0 e 100\n")
      u.aguarde(3000)
      limpa()}    
    }enquanto(verdadeiro)
    
  }
}
