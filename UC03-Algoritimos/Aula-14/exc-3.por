programa {
  inteiro totais[20]
  inteiro t_posi = 0, t_neg = 0, num, i
  inteiro posicao1 = 0, posicao2 = 0
  funcao inicio() {
    para(i = 0; i < 20; i++){
      escreva("Informe o ",i+1,"° número -> ")leia(num)
      totais[i] = num

      se(num >= 0){
        t_posi++}
      senao{
        t_neg++}
    }
    inteiro positivos[t_posi], negativos[t_neg]

    para(i = 0; i < 20; i++){
      se(totais[i] >= 0){
        positivos[posicao1] = totais[i]
        posicao1++
      }
      senao{
        negativos[posicao2] = totais[i]
        posicao2++
      }
    }

    escreva("\nPOSITIVOS = ", positivos)
    
    escreva("\nNEGATIVOS = ", negativos)

    
  }
}
