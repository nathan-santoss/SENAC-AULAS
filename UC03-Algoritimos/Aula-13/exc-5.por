programa {
  cadeia login, senha

  funcao inicio() {

    faca{
      escreva("\nInforme o login -> ")leia(login)
      escreva("Agora digite sua senha -> ")leia(senha)
      se(login != senha){
        escreva("\nCADASTRO REALIZADO COM SUCESSO")
        pare
      }
      senao{escreva("\nDADOS INVÁLIDOS, DIGITE NOVAMENTE\n")}
    }enquanto(verdadeiro)
    
  }
}
