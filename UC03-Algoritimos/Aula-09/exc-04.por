programa {
  inclua biblioteca Matematica
  inclua biblioteca Tipos
  

  real salario
  inteiro filhos
  inteiro conjuge
  real bonus
  cadeia percent

  funcao inicio() {
    escreva("CALCULADORA DO BONUS - DIA DA FAMÍLIA")
    escreva("\nInforme o salário do usuário: ")leia(salario)
    escreva("\nEm seguida, responda as perguntas com apenas '1'(sim) ou '2'(não)")

    escreva("\nFuncionário tem filhos? ")leia(filhos)
    escreva("\nO mesmo é possui Cônjuge? ")leia(conjuge)


    se((filhos == 1 ou filhos == 2) e (conjuge == 1 ou conjuge == 2)){ //Digitou '1' ou '2'?
      se(filhos == 1 e conjuge == 2){ // Tem filhos e não tem conjuge
        bonus = salario*0.20
        percent = "20%"
      }
      senao se(filhos == 1 e conjuge == 1){ // Tem filho e conjuge
        bonus = salario*0.15
        percent = "15%"
      }
      senao se(filhos == 2 e conjuge == 1){ // NÃO tem filhos e TEM conjuge
        bonus = salario*0.10
        percent = "10%"
      }
      senao se(filhos == 2 e conjuge == 2){// NÃO tem filhos e conjuge
        Tipo.real_para_cadeia(bonus)
        percent = "\nO funcionário não tem direito ao bonus"    
      }

      escreva("\n",
    "Funcionário possui um salário de R$",Matematica.arredondar(salario,2),
    "\nPercentual do bonus: ", percent,
    "\nValor do bonus R$",Matematica.arredondar(bonus,2))
    }
    senao{escreva("\nInforme as respostas somente com '1'(para SIM) ou '2'(para NÃO)\n")}
    
    
    
  }
}
