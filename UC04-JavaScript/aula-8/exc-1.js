import promptSync from 'prompt-sync'
const prompt = promptSync()

const produtos = [
  {
    nome: "banana",
    preco: 10.50,
    categoria: "hortifruti"
  },
  {
    nome: "maçã",
    preco: 7.80,
    categoria: "hortifruti"
  },
  {
    nome: "alface",
    preco: 3.20,
    categoria: "hortifruti"
  }
]

produtos.forEach(prod => {
    console.log(`
        [==== PRODUTOS ====]\n
        Nome -> ${prod.nome}
        Preço -> R$${(prod.preco + (prod.preco*(5/100))).toFixed(2)}
        Categoria -> ${prod.categoria}`);
});

let menorq5 = produtos.every(prod => prod.preco < 5)

if(!menorq5){
    console.log(`Existem preços menores que 5`);
}
else{
    console.log(`Todos os preços são maiores que 5`);
}

let menorq0 = produtos.every(prod => prod.preco < 0)

if(menorq0){
    console.log(`Existem preços menores que 0`);
}
else{
    console.log(`Todos os preços são maiores que 0`);
}