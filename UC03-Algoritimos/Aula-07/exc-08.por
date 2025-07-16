programa {inclua biblioteca Matematica
  real distancia
  real velocidade

  funcao inicio() {
    escreva("Informe a distancia até o destino em KM: ")
    leia(distancia)

    escreva("Digite a velocidade: ")
    leia(velocidade)

    real resultado_minutos = (distancia % velocidade) // (dividir distencia por km/h resulta no tempo em horas)
    real resultado_horas = distancia/velocidade


    escreva("O tempo que irá levar para chegar serão = ", Matematica.arredondar(resultado_horas, 0), " horas e ", resultado_minutos, " minutos")  }
    
}
