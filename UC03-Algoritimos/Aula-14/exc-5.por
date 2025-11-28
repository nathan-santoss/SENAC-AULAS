programa {
  inteiro total[20]
  inteiro i, pares = 0, impares = 0, num
  inteiro posicao1 = 0, posicao2 = 0
  
  funcao inicio() {
    para(i = 0; i < 20;i++){
      escreva("Informe o ",i+1,"° número -> ")leia(num)
      total[i] = num

      se(num % 2 == 0){pares++}
      senao{impares++}
    }
    inteiro v_impar[impares], v_par[pares]
    
    para(i = 0; i < 20; i++){  
      se(total[i] % 2 == 0){
        v_par[posicao1] = total[i]
        posicao1++
      }
      senao{
        v_impar[posicao2] = total[i]
        posicao2++
      }
    }
    escreva("\nTOTAIS DE NÚMEROS IMPARES É = ",impares," e eles são: ", impares)
    escreva("\nTOTAIS DE NÚMEROS PARES É = ",pares," e eles são: ", pares)
  }
}
