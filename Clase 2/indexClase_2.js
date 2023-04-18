let variable = 12
console.log(variable)


let variable2 = "auto"
const CONSTANTE = 1;
let arreglo1 = [1,2,3,4]
let objeto = {nombre:"pedro",edad:25}


console.log(variable2)
console.log(arreglo1)
console.log(objeto)


let texto = "Esto es un texto"
console.log(texto)
console.log(texto.length)
console.log(texto.trim().split(' '))

let boolean1 = true
let boolean2 = false
let numero = 1

console.log(boolean1)
console.log(numero)


let matriz= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]

console.log(matriz[2][3])

matriz.forEach(element => {console.log(element)});


const temperaturas = Array(100).fill(0) //array
console.log(temperaturas)




const dias =[]  // pila
dias.push("lunes")
dias.push("martes")
dias.push("miercoles")
console.log(dias)


dias.unshift("Domingo") 
dias.shift
console.log(dias)


dias.splice(0,1) // comienze en el cero y quite 1
console.log(dias)

const lista =[2,45,254,1,0,22]
console.log(lista)

console.log(lista.sort((a,b) => a-b)) 

const nuevaLista = lista.splice()
const otraNuevaLista = [...lista,...dias]

console.log(otraNuevaLista)

const persona = {
    nombre:"Juan",
    apellido: "Perez",
    hijos: ["ROdrigo","Micaela","Susana"]
}

const nuevaPersona = {...persona}

console.log(persona.nombre)
nuevaPersona.nombre = "Rosana"
console.log(nuevaPersona.nombre)

nuevaPersona.hijos.push("Hermenjildo") // tambien cambia el objeto anterior porque tiene la misma referencia
console.log(persona.hijos)

// la forma de duplicar un objeto para que no tenga referencia del anterior

/* Ejercicio 
Dada una lista de numero [3,6,-4,8,10,-15,30,0,-12,20]
Calcular, utilizando un objeto para los resultados, cantidad de positivos y negativos,
total de positivos y negativos, cantidad y total de números mayores a 8. Mostrar el
objeto de los resultados en consola del navegador. */

let numeros = [3,6,-4,8,10,-15,30,0,-12,20]

let resultado = {numPositivos:0,numNegativos:0,totalPositivos:0,totalNegativos:0,cantMayorOcho:0,totalMayorOcho:0}

let calnumPositivos = numeros.filter (p =>  p > 0)
let calnumNegativos = numeros.filter (p =>  p < 0)
let calcantOcho = numeros.filter (p =>  p > 8)


resultado.numPositivos=calnumPositivos
resultado.numNegativos=calnumNegativos
resultado.cantMayorOcho=calcantOcho



  for (let index = 0; index < calnumPositivos.length; index++) {
    resultado.totalPositivos += calnumPositivos[index]
  }

  for (let index = 0; index < calnumNegativos.length; index++) {
    resultado.totalNegativos += calnumNegativos[index]
  }
  for (let index = 0; index < calcantOcho.length; index++) {
    resultado.totalMayorOcho += calcantOcho[index]
  }


console.log(resultado)


/* Ejercicio 
Dado esta lista de objetos, crear una nueva lista de objetos, pero en vez de tener un
array de pagos, debería tener un array con las cuotas en deuda.
[{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas[1,2,3,4]},
{poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas[1,2,3,4]},
{poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas[1,2,3,4,5,6,7,8,9,10,11,12]},
{poliza:126,patente:'AA300SH',cuotas:8,pagadas[1,2]} ]
Mostrar el resultado por consola */




const pagos = [
{poliza:123,patente:'AA345FD',cantidad_cuotas:12,pagadas:[1,2,3,4]},
{poliza:124,patente:'AA500RR',cantidad_cuotas:6,pagadas:[1,2,3,4]},
{poliza:125,patente:'AA200AA',cantidad_cuotas:12,pagadas:[1,2,3,4,5,6,7,8,9,10,11,12]},
{poliza:126,patente:'AA300SH',cantidad_cuotas:8,pagadas:[1,2]}
 ]

const listaNueva = [
{poliza:123,patente:'AA345FD',cantidad_cuotas:12,cuotasDeuda:[]},
{poliza:124,patente:'AA500RR',cantidad_cuotas:6,cuotasDeuda:[]},
{poliza:125,patente:'AA200AA',cantidad_cuotas:12,cuotasDeuda:[]},
{poliza:126,patente:'AA300SH',cantidad_cuotas:8,cuotasDeuda:[]}
]


for(let i=0;i< pagos.length;i++){

  for (let index = 0; index <  pagos[i].cantidad_cuotas; index++) {

    if(!pagos[i].pagadas.includes(index)){
        listaNueva[i].cuotasDeuda.push(index)
    }
    
}
}


console.log(listaNueva)





