//Objeto: alunos e notas
const alunosENotas = {
    'João': 8,
    'Maria': 9,
    'Ana': 10,
    'Lucas': 2,
    'Pedro': 6,
    'Juliana': 4,
    'Carla': 3,
    'Thiago': 5,
    'Fernanda': 10,
    'Paulo': 5,
}

//Transformando o objeto em array
const listaAlunos = Object.keys(alunosENotas).map(nome => ({
        nome: nome,
        nota: alunosENotas[nome]
    })    
)

//Define o filtro
const aprovaAlunos = aprovado => aprovado.nota >= 6;

//Filtro de alunos aprovados
const alunosAprovados = listaAlunos.filter(aprovaAlunos);

//Exibe alunos aprovados e suas notas
console.log(alunosAprovados);