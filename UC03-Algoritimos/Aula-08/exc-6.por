programa {
   inclua biblioteca Texto

   cadeia login_cadastro, senha_cadastro, login, senha
  
  funcao inicio() {

    escreva("Para prosseguir, realize o cadastro: digite seu login e senha(COM 4 DÍGITOS).", "\n")
    escreva("LOGIN: ")
    leia(login_cadastro)

    escreva("\n", "SENHA: ")
    leia(senha_cadastro)
    Texto.numero_caracteres(senha_cadastro)

    se (Texto.numero_caracteres(senha_cadastro) == 4){ //SENHA CADASTRO VÁLIDA, segue o fluxo.
      escreva("\n", "Muito bem, agora vamos realizar o login!", "\n")
      escreva("\n", "DIGITE SEU LOGIN/USUÁRIO: ")
      leia (login)
    
      escreva("Digite sua SENHA: ")
      leia(senha)
        se (senha == senha_cadastro e login == login_cadastro){
          escreva("\n", "LOGIN EFETUADO COM SUCESSO!")
        }
        senao {
          escreva("\n", "USUÁRIO OU SENHA INCORRETOS, VERIFIQUE E TENTE NOVAMENTE.")
        }
    }
    senao { //SENHA CADASTRO INVALIDA
      escreva("\n", "A SENHA ESCOLHIDA NÃO É VALIDA, DIGITE NOVEMENTE UMA SENHA COM 4 DÍGITOS.")
    }

  }
}
