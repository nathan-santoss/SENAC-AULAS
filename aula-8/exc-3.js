import promptSync from 'prompt-sync'
const prompt = promptSync()

const pacientes = [
    {
      nome: "João Silva",
      situacao: "internado",
      numero: 101,
      ala: "Cardiologia",
      idade: 67
    },
    {
      nome: "Maria Oliveira",
      situacao: "alta",
      numero: 102,
      ala: "Ortopedia",
      idade: 45
    },
    {
      nome: "Carlos Souza",
      situacao: "internado",
      numero: 103,
      ala: "Neurologia",
      idade: 52
    },
    {
      nome: "Ana Paula",
      situacao: "alta",
      numero: 104,
      ala: "UTI",
      idade: 33
    },
    {
      nome: "Lucas Mendes",
      situacao: "internado",
      numero: 105,
      ala: "Urologia",
      idade: 60
    }
  ];
const internados = pacientes.filter(pessoa => pessoa.situacao === 'internado')
const media = internados.reduce((soma, pessoa) => soma + pessoa.idade, 0)
console.log(`MÉDIA DOS PACIENTES (internados) -> ${(media/pacientes.length).toFixed(2)} Anos`);

const buscado = prompt('Informe o nome do paciente para buscar -> ').toUpperCase()
const encontrado = pacientes.filter(pessoa => pessoa.nome.toUpperCase() === buscado)
console.log(`
    [===== PACIENTES ENCONTRADOS =====]`);

encontrado.forEach(pessoa => {
    console.log(`
        Nome -> ${pessoa.nome}
        Idade -> ${pessoa.idade}
        Situação -> ${pessoa.situacao}
        Ala -> ${pessoa.ala}
        Numero do paciente -> ${pessoa.numero}`);
});
console.log(`
    [===== FIM DA BUSCA =====]`);

let maiorQ12 = pacientes.every(pessoa => pessoa.idade > 12)
if(maiorQ12){console.log('TODOS OS PACIENTES SÃO MAIORES QUE 12 ANOS');}
else{'EXISTEM PACIENTES MENORES QUE 12 ANOS'}