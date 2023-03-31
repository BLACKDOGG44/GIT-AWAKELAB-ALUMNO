function calcularHipotenusa(cateto1, cateto2) {
    var hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
    return hipotenusa.toFixed(2); // Redondeamos el resultado a dos decimales
  }
  
  // Ejemplo de uso
  var cateto1 = 3; // en unidades de medida
  var cateto2 = 4; // en unidades de medida
  var hipotenusa = calcularHipotenusa(cateto1, cateto2);
  console.log("La hipotenusa es: " + hipotenusa); 