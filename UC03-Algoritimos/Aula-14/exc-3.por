programa {
  inteiro num, i
  inteiro pos_positivo = 0, pos_negativo = 0  //"pos" para representar a posição atual no array
  inteiro positivos[20], negativos[20] //precisam comportar 20 cada, pois o usuário pode digitar uma opção só
  funcao inicio() {
    para(i = 0; i < 20; i++){
      escreva("Informe o ",i+1,"° número -> ")leia(num) //estrutura para identificar positivos e negativos

      se(num >= 0 ){
        positivos[pos_positivo] = num //usuário insere o número na posição atual do marcador (inicialmente zero)
        total_positivo++} // aqui aumenta +1 na posição, permitindo que caso o usuário queira, digitar um novo positivo/negativo
      senao{
        negativos[pos_negativo] = num
        pos_negativo++
      }
    }
    //Segunda estrutura de repetição para imprimir de acordo com a posição do array
    escreva("positivos = ")
    para(i = 0; i < pos_positivo;i++){
      escreva(positivos[i]," ")
    }
    escreva("\nnegativos = ")
    para(i = 0; i < pos_negativo;i++){
      escreva(negativos[i]," ")
    }
    
  }
}
