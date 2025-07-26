programa {

  inteiro numero
  cadeia mes

  funcao inicio() {

    escreva("Informe o número do mês para saber quantos dias o mesmo possui(numeros de 1 à 12) ")leia(numero)

    escolha(numero){
      caso 1: caso 3: caso 5: caso 7: caso 8: caso 10: caso 12:
        mes = " e esse possui 31 dias"
        pare
      caso 4: caso 6: caso 9: caso 11:
        mes = " e esse possui 30 dias"
        pare
      caso 2:
        mes = " e esse mês possui 28 dias"
        pare
    }

    escreva("\nO usuário selecionou o mês ",numero,mes)  
  }
}
