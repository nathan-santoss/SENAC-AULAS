programa {
  inteiro num, soma = 0, totais = 0, i=1, total_par = 0
  real media
  cadeia resultado
  funcao inicio() {
    faca{
      escreva("\nInforme o ",i,"° número -> ")leia(num) totais++
      
      se(num %2 == 0 e num != 0){total_par++
        soma = soma + num
        media = soma/total_par}
      i++
    }enquanto(num !=0)
    escreva("\nA média dos números pares é = ",media)
  }
}
