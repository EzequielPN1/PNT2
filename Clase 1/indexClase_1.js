  //Enunciado:
  //Dado el listado de listado de productos "pala, carretilla, cuchara, bolsa de cemento, bolsa de cal, arena" y el listado de precio unitario 3500, 35000,
  // 2000, 5600, 4600, 7800, que se corresponde en orden con el listado de productos, extraer dos listados uno con los productos inferiores a 5000 pesos
  // y otro con los superiores, detallando la cantidad de cada uno de ellos y la sumatoria total de cada grupo.

  let productos=[{nombre:'pala',precio:3500},{nombre:'carretilla',precio:35000},{nombre:'cuchara',precio:2000},{nombre:'bolsa de cemento',precio:5600}
  ,{nombre:'bolsa de cal',precio:4600},{nombre:'arena',precio:7800}]
  
  let resuMenores = productos.filter (p =>  p.precio < 5000)
  console.log(resuMenores)
  console.log("La cantidad de los productos inferiores a 5000 es de " + resuMenores.length)
  
  let sum = 0;
  
  for (let index = 0; index < resuMenores.length; index++) {
    sum += resuMenores[index].precio;
  }
  
  console.log("La sumatoria de los productos inferiores a 5000 es de " + sum)
  
  let resuMayores = productos.filter (p =>  p.precio > 5000)
  console.log(resuMayores)
  console.log("La cantidad de los productos Mayores a 5000 es de " + resuMayores.length)
  
  for (let index = 0; index < resuMayores.length; index++) {
    sum += resuMayores[index].precio;
  }
  console.log("La sumatoria de los productos Mayores a 5000 es de " + sum)