programa {

  cadeia userName
  inteiro idadeUser
  real peso
  real altura
  

  funcao inicio() {
    
    escreva("CALCULADORA DE IMC", "\n")
    escreva("Digite seu nome: ", "\n")
    leia(userName)

    escreva("É um prazer te conhecer, ", userName, "!", "\n")
    escreva("Qual o seu peso?(em kg): ")
    leia(peso)

    escreva("Me informa agora a sua altura(em metros): ")
    leia(altura)

    real imc = (peso / (altura * altura))

    escreva(userName, " seu IMC é = ", imc)

  }
}
