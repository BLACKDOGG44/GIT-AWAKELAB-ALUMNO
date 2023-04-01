 function calcularIVA(precio,porcentaje) {
    var iva = precio *porcentaje  / 100;
     var porcentaje = 0.19
    return iva.toFixed(2);
  }
  
  var precio = parseFloat(prompt("Ingresa el precio del producto:"));
  var porcentaje = parseFloat(prompt("Ingresa el porcentaje  de IVA):"));
  
  var iva = calcularIVA(precio);
  
  alert("El IVA correspondiente es: $");
