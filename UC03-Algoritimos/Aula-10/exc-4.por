programa {

  inteiro n1, n2
  inteiro resultado
  cadeia musica

  funcao inicio() {

    escreva("Informe os números abaixo para acessar a playlist: ")
    escreva("\nn1 -> ")leia(n1)
    escreva("n2 -> ")leia(n2)
    resultado = n1+n2

    se(resultado >= 0 e resultado <= 10){
      escolha(resultado){
        caso 0:
          musica = "PROXYCITY"
          pare
        caso 1:
          musica = "P.Y.N.G"
          pare
        caso 2:
          musica = "DNSUEY!"
          pare
        caso 3:
          musica = "SERVERS"
          pare
        caso 4:
          musica = "HOST!"
          pare
        caso 5:
          musica = "CRIPTONIZE"
          pare
        caso 6:
          musica = "OFFLINE DAY"
          pare
        caso 7:
          musica = "SALT"
          pare
        caso 8:
          musica = "ANSWER!"
          pare
        caso 9:
          musica = "RAR?"
          pare
        caso 10:
          musica = "WIFI ANTENNAS"
          pare
      }
      escreva("\nESTÁ TOCANDO AGORA: ",musica)
    }
    
    senao{escreva("\nOPÇÃO NÃO ENCONTRADA NA PLAYLIST, DIGITE NOVAMENTE")}

    
  }
}
