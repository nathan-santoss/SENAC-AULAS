programa {
inclua biblioteca Matematica
inclua biblioteca Tipos
  
  real peso_peixes
  
  funcao inicio() {
    escreva("Olá, João! Me informe o peso dos peixes em KG: ")
    leia(peso_peixes)

    se (peso_peixes > 30){
      real limite_ult = (peso_peixes - 30)
      
      real multa = ((Tipos.real_para_inteiro(limite_ult))* 4.50)
      
      
      escreva("Você pescou ", peso_peixes,"kg e ultrapassou ", Matematica.arredondar(limite_ult,2), "kg.", "\n")
      escreva("Por conta disso, uma multa de R$", Matematica.arredondar(multa,2)," será aplicada em sua pescaria")
    }
    senao {
      escreva("Você pescou ",peso_peixes,"kg ao total e por conta disso você não ultrapassou o limite de 30kg.",
       "\n","Então, não há multa para pagar")
    }
  }
}
