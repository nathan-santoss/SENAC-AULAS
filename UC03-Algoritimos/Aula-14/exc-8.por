programa {
  inteiro numeros[20]
  inteiro i, num, total = 0
  funcao inicio() {
    escreva("Digite números a seguir e para encerrar, digite 0")
    para(i = 0; i < 20; i++){
      escreva("\nInforme o ",i+1,"° valor -> ")leia(num)
      se(num !=0){
        numeros[i] = num
        total++
      }
      senao se(num == 0){pare}
    }
    escreva("\nNosso vetor ficou assim --> ")
    para(i = 0; i < total; i++){escreva(numeros[i]," ")}

    para(i = 0; i < total; i++){
      se(numeros[i] < 0){
        numeros[i] = numeros[i] * -1
      }
    }

    escreva("\nApós transformar os números negativos em positivos, o vetor ficou assim: \n")
    para(i = 0; i < total; i++){escreva(numeros[i]," ")}
  }
}
