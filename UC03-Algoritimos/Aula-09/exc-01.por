programa {
  inclua biblioteca Matematica


  real peso_pessoa
  real altura_pessoa
  real idade

  funcao inicio() {
    escreva("Informe seu peso para o cálculo do IMC: ")leia(peso_pessoa)
    
    escreva("Digite sua altura em metros (ex -> 1.69): ")leia(altura_pessoa)
      
    real imc = (peso_pessoa/(altura_pessoa*altura_pessoa))

      escreva("\nO IMC do usuário é = ", Matematica.arredondar(imc,2))

      se(imc < 17){
        escreva("\nUsuário MUITO ABAIXO DO PESO.")
      }
      senao se(imc >= 17 e imc <= 18.49){
        escreva("\nUsuário ABAIXO DO PESO")
      }
      senao se(imc >=18.50 e imc <= 24.99){
        escreva("\nUsuário com PESO NORMAL")
      }
      senao se(imc >= 25 e imc <= 29.99){
        escreva("\nUsuário ACIMA DO PESO")
      }
      senao se(imc >=30 e imc <=34.99){
        escreva("\nUsuário com OBESIDADE 1")
      }
      senao se(imc >= 35 e imc <= 39.99){
        escreva("\nUsuário com OBESIDADE 2(Severa)")
      }
      senao se(imc >=40){
        escreva("\nUsuário com OBESIDADE 3(Mórbida)")
      }
    

  }
}
