var cateto1 = 10;
var cateto2 = 7;
var hipotenusa = calcularHipotenusa(cateto1, cateto2);

function calcularHipotenusa(cateto1, cateto2) {
  // Elevar al cuadrado cada cateto
  var cateto1AlCuadrado = Math.pow(cateto1, 2);
  var cateto2AlCuadrado = Math.pow(cateto2, 2);

  // Sumar los cuadrados de los catetos
  var sumaCuadradosCatetos = cateto1AlCuadrado + cateto2AlCuadrado;

  // Calcular la raíz cuadrada de la suma de los cuadrados de los catetos
  var hipotenusa = Math.sqrt(sumaCuadradosCatetos);

  // Devolver la hipotenusa
  return hipotenusa;
}

console.log ("La hipotenusa es: " + hipotenusa);


  
  