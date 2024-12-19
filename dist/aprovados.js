"use strict";

//Objeto: alunos e notas
var alunosENotas = {
  'João': 8,
  'Maria': 9,
  'Ana': 10,
  'Lucas': 2,
  'Pedro': 6,
  'Juliana': 4,
  'Carla': 3,
  'Thiago': 5,
  'Fernanda': 10,
  'Paulo': 5
};

//Transformando o objeto em array
var listaAlunos = Object.keys(alunosENotas).map(function (nome) {
  return {
    nome: nome,
    nota: alunosENotas[nome]
  };
});

//Método de filtro
// function aprovaAlunos(aprovado) {
//     return aprovado.nota >= 6;
// }

var aprovaAlunos = function aprovaAlunos(aprovado) {
  return aprovado.nota >= 6;
};

//Filtro de alunos aprovados
var alunosAprovados = listaAlunos.filter(aprovaAlunos);

//Exibe alunos aprovados e suas notas
console.log(alunosAprovados);