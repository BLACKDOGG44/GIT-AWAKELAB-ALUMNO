function calcularHipotenusa(cateto1, cateto2) {
    var hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
    return hipotenusa.toFixed(2);
  }
  
  var cateto1 = parseFloat(prompt("Ingresa el valor del primer cateto:"));
  var cateto2 = parseFloat(prompt("Ingresa el valor del segundo cateto:"));
  
  var hipotenusa = calcularHipotenusa(cateto1, cateto2);
  
  alert("El valor de la hipotenusa es: " + hipotenusa);
