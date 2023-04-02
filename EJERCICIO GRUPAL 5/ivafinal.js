 // b) calcular el iva de una compra
const IVA = 0.19;
var montoCompra;
var impuesto = montoCompra* IVA;
var totalCompra = montoCompra + impuesto;
var porcentajeIVA = 0.19;

const precio = "100"

const valorIVA =precio * porcentajeIVA; 
const precioConIVA = precio - valorIVA; 

console.log(`El precio con  IVA es: ${precio}$`);
console.log(`El valor del IVA es: ${valorIVA}$`);
console.log(`El precio sin IVA es: ${precioConIVA}$`);