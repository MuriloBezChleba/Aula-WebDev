// const saudar = function (nome){
//     return `olá, ${nome}`
// }

// console.log(saudar("murilo"))

// function exibirTarefa(id, titulo, prioridade){
//     if(!id && !titulo && !prioridade){
//         console.error("Faltou passar os valores")
//         return
//     }

//     console.log(`Tarefa ${id}: ${titulo} (prioridade: ${prioridade})`)
// }
// exibirTarefa( )



// function calcularEstatisticas (numeros){
//     let soma = 0
//     let min = numeros[0]
//     let max = numeros[0]

//     for (let i=0;i<numeros.length;i++)
//         {
//         soma += numeros[i]
//         if (numeros[i] < min)
//             {
//             min = numeros[i]
//         }
//         if (numeros[i] > max)
//         {
//             max = numeros[i]
//         }
//     }
//     const media = soma / numeros.length
//     return {soma: soma, media: media, min ,max}
// }

// const resultados = calcularEstatisticas([5,10,15,20,25])
// console.log(resultados)


// const subtrair = (a,b) => a - b

// console.log(subtrair(5,2))

// const numeros = [1,2,3,4,5]

// const dobrados = numeros.map(n => n*2)

// console.log("Numeros dobrados:" , dobrados)

// const contador = {
//     valor: 0,
//     incrementarTradicional: function() {
//       setTimeout(function() {

//         console.log("Valor (tradicional):", this.valor);
//       }, 100);
//     },
//     incrementarArrow: function() {
//       setTimeout(() => {
        
//         this.valor++;
//         console.log("Valor (arrow):", this.valor);
//       }, 100);
//     }
//   };
//   contador.incrementarTradicional();
//   contador.incrementarArrow();


// (function()
// {
//     const a = 1
//     const b = 2
//     console.log("resultado da IIFE (a+b): ", a+b)
// })()

function criarContador() {
    let contador = 0
    return {
      incrementar: function() {
        contador++;
        return contador;
      },
      valor: function() {
        return contador;
      }
    };
  }
  
  const meuContador = criarContador();
  console.log("Contador:", meuContador.incrementar()); 
  console.log("Contador:", meuContador.incrementar());