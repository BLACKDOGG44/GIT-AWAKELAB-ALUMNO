function calcularIVA(montoCompra, porcentajeIVA) {
    var iva = montoCompra * porcentajeIVA / 100;
    return iva.toFixed(2); // Redondeamos el resultado a dos decimales
  }
  
  // Ejemplo de uso
  var montoCompra = 1000; // en pesos
  var porcentajeIVA = 16; // en porcentaje
  var iva = calcularIVA(montoCompra, porcentajeIVA);
  console.log("El IVA es: $" + iva);
  