let arrayNumerico = [2,34,65,75,2134,21,4,1];


arrayNumerico.forEach(function (elemento){
console.log(elemento +1);
});



console.log("Con for Tradicional");
for(let i = 0; i < arrayNumerico.length;i++){
  console.log(arrayNumerico[i])
}

//callback
let funcionGenerica = function(a,b,tipoOperacion){
  return tipoOperacion(a,b)
}
let suma = (a,b) => a+b
let resta = (a,b) => a-b

console.log(funcionGenerica(2,2,resta))

//find
console.log('metodo find:',arrayNumerico.find(elemento => elemento==21)) // find encontrará el primer elemento del arreglo que cumpla la condición y retornará ese valor,

//filter
console.log('metodo filter: ',arrayNumerico.filter((numero) => numero > 4)); //filter que crea un arreglo con todos los valores que cumplen una condición

// con objetos
const listaObjetos = [
  {nombre: "Juan",apellido : "Perez",edad : 34},
  {nombre: "Pedro",apellido : "Gomez",edad : 20},
  {nombre: "Sebastian",apellido : "Bolaños",edad : 3},
  {nombre: "Marcelo",apellido : "jerez",edad : 84},
];

let mayoresVeinte = listaObjetos.filter(objeto => objeto.edad > 20); 

console.log(mayoresVeinte);

//sort
let deMenorAMayor = arrayNumerico.sort((a,b) => a-b) //el sort oredena los array: sort((a,b) => a-b)  O  sort((a,b) => b-a)
console.log('metodo sort, de menor a mayor ',deMenorAMayor)
let deMayorAMenor = arrayNumerico.sort((a,b) => b-a)
console.log('metodo sort, de  mayor a menor ',deMayorAMenor)


//Includes: devulve true o false si el elemento se encuentra en el array
console.log('metodo Includes:',arrayNumerico.includes(2))



// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

let nombresMayoresVeinte = listaObjetos.filter(objeto => objeto.edad > 20).map(objeto => objeto.nombre); 
console.log(nombresMayoresVeinte);








