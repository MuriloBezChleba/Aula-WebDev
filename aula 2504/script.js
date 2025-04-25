// const categorias = new Array ('Trabalho', 'Estudo', 'Pessoal', 'Projetos')

// console.table(categorias)

// const propriedades

// console.table(tarefas)

// tarefas[1] = 'criar projeto novo'

// console.table(tarefas)

// tarefas.push('Realizar testes')

// console.table(tarefas)

// tarefas.unshift('Revisar documentacao')

// console.table(tarefas)

// tarefas.shift()

// console.table(tarefas)

// tarefas.pop()

// console.table(tarefas)

// tarefas.splice(1,1)

// console.table(tarefas)

// const tarefas = [
//     'Estudar js', 'criar projeto', 'preparar apresentacao', 'revisar codigo'
// ]



// tarefas.forEach((elemento,indice) => {
//     console.log(`${indice+1}. ${elemento}`)
// })

// const arrayNovo = tarefas.map((elemento, indice) => {
//     return elemento + '- concluido'
// })

// console.log(arrayNovo)

// const tarefasComA = tarefas.filter(elemento => elemento.toLowerCase().includes('a'))
// console.log(tarefasComA)

// const tarefasEncontrada = tarefas.find(elemento => elemento.includes('js'))
// console.log(tarefasEncontrada)

// const IndicetarefasEncontrada = tarefas.findIndex(elemento => elemento.includes('js'))
// console.log(IndicetarefasEncontrada)

// const valorFinal = tarefas.reduce((total, t, indice) => 
//     total + t.length, 0
// )

// console.log(valorFinal)

// const tarefa = {
//     id: 1,
//     titulo: "aprender sobre objetos",
//     descricao: "Estudar",
//     concluida: false,
//     prioridade: "alta",
//     dataCriacao: new Date()
// }

// console.log(tarefa)
// console.log(tarefa?.titulo)
// console.log(tarefa['titulo'])

// const tarefasEspeciais = {
//     "data-criacao": new Date(),
//     "nome da tarefa": "nome da tarefa YEAHH"
// }

// console.log(tarefasEspeciais["nome da tarefa"])

// const projetoTaskMaster = {
//     nome: "TaskMaster",
//     version: "1.0",
//     autor: "Curso JavaScript",
//     tarefas: [],
//     adicionarTarefa(titulo, prioridade = "média") {
//       const novaTarefa = {
//         id: this.tarefas.length + 1,
//         titulo,
//         prioridade,
//         concluida: false,
//         criada: new Date()
//       };
//       this.tarefas.push(novaTarefa);
//       console.log(`Tarefa "${titulo}" adicionada.`);
//       return novaTarefa;
//     },
//     listarTarefas() {
//       console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
//       this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
//     }
//   };
  
//   projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
//   projetoTaskMaster.adicionarTarefa("Criar interface");
//   projetoTaskMaster.listarTarefas();

// console.log(Object.keys(projetoTaskMaster))
// console.log(Object.values(projetoTaskMaster))

const prioridades = ["baixa", "media", "alta"]

const [baixa,media,alta] = prioridades

console.log(baixa,media,alta)

const categorias = [
    "trabalho", "estudo", "vida pessoal", "saude"
]

const [primeiraCategoria, ... outrasCategorias] = categorias

console.log(primeiraCategoria,outrasCategorias)