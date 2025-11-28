programa {
  inteiro num, op, i
  real resultado_op
  cadeia sinal
  funcao inicio() {
    escreva("Informe o número -> ")leia(num)
    escreva(
      "Agora selecione um operador para execução da tabuada:\n",
      "(1) -> SOMA\n",
      "(2) -> SUBTRAÇÃO\n",
      "(3) -> MULTIPLICAÇÃO\n",
      "(4) -> DIVISÃO\n",
      "ESCOLHA = ")leia(op)

    se(op >= 1 e op <=4){
      para(i = 0; i<=10; i++){
        escolha(op){
          caso 1:
            resultado_op = i+num
            sinal = " + " pare
          caso 2:
            resultado_op = i-num
            sinal = " - " pare
          caso 3:
            resultado_op = i*num
            sinal = " x " pare
          caso 4:
            resultado_op = i/num
            sinal = " / " pare
        }
        escreva(num,sinal, i, " = ", resultado_op, "\n")
      }
    }
    senao{escreva("OPÇÃO INVÁLIDA")} 
    
    
  }
}
