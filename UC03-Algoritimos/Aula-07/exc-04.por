/* 4. Faça um algoritmo que:

    ->Solicite o tamanho de um arquivo para download (em MB);

    ->Solicite a velocidade de um link de Internet (em Mbps->;

    ->Calcule e informe o tempo aproximado de download do
arquivo usando o link (em minutos). */




programa {

  real arquivoX 
  real internet


  funcao inicio() {
    
    escreva("Qual o tamanho do arquivo que deseja baixar (em MB)? ")
    leia(arquivoX)

    escreva("Qual qual a velocidade da sua internet (em megas)? ")
    leia(internet)

    real velocidadeNet = (internet / 8)
    inteiro resultado = ((arquivoX / velocidadeNet) / 60)

    escreva("Sua internet possui velocidade de ", velocidadeNet,"MB/s.", "\n")
    escreva("O arquvio de tamanho ", arquivoX,"MBs irá levar cerca ", resultado," minuto(s) para concluir o download"
    )
  }
}
