programa {inclua biblioteca Matematica
  inteiro i
  inteiro fh
  real c

  funcao inicio() {
    para(i = 50; i <= 86; i++){
      fh = i
      c = (5/9)*(fh - 32)
      escreva(fh," Fahrenheit = ",Matematica.arredondar(c,2)," Celsius","\n")
    }  
  }
}
