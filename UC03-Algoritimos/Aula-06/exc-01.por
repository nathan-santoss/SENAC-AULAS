/* 1. Crie um algoritmo para Produto:
  Crie variáveis para guardar os seguintes valores: nome,
  preço, quantidade e ano de fabricação do produto.

  -> A variável ano de fabricação terá valor fixo igual a
  2025.

  -> Solicite ao usuário os outros valores e armazene nas
  respectivas variáveis.
    - Por fim, mostre o seguinte resultado:
    - O produto X foi fabricado em X.
    - O preço é R$ X para o X.
    - Há X unidades disponíveis do produto X       */



programa {

  cadeia nomeuser
  real preco
  inteiro quantidade
  const inteiro fabricacaoAno = 2025
  cadeia produto

  funcao inicio() {
    
    escreva("Bem vindo(a)! Digite seu nome:  ")
    leia(nomeuser)

    escreva("\n", "Muito bem, " + nomeuser + " agora digite o produto que deseja inserir no sistema ")
    leia(produto)

    escreva("\n", "Agora digite o preço do item que deseja inserir no sistema:  ")
    leia(preco)

    escreva("\n", "Qual a quantidade de itens?  ")
    leia(quantidade)

    escreva("\n", "PRODUTO INSERIDO COM SUCESSO")

    escreva("\n", "Descrição do Item:  ",
    "\n", "O produto ", produto, " foi fabricado em ", fabricacaoAno,
    "\n", "O preço dele é = R$", preco,
    "\n", "Unidades deste item disponíveis: = ", quantidade,
    "\n", "Valor total em itens = R$", quantidade * preco)
    
  }
}
