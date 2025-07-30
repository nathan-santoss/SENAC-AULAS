programa {inclua biblioteca Matematica

  inteiro num, i, quantidade
  inteiro pares = 0, impares = 0
  inteiro soma = 0
  real media = 0
  funcao inicio() {
    
    escreva("INFORME QUANTOS NÚMEROS VOCÊ DESEJA VERIFICAR -> ")leia(quantidade)//quantidade de números
    para(i = 1; i <=quantidade; i++){
      escreva("Insira o ",i,"° número = ")leia(num)//repetição determinada pelo usuário
      soma = soma + num //soma acumulativa dos número, soma começa com 0 e vai alterando o valor (acumulando)
      media = soma/quantidade
      se(num%2 == 0){ //se o resto é 0, então é par
        pares = pares+1 
      }
      senao{impares = impares+1} //senao é impar
    }
    escreva("----- RESULTADO -----",
      "\nSOMA = ", soma,
      "\nMÉDIA = ",Matematica.arredondar(media,2),
      "\nPARES = ",pares, " | ÍMPARES = ",impares
    )
  }
}
