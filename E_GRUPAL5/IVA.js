const precio = 100; // Este es el precio al que se le calculará el IVA
const porcentajeIVA = 0.19; // Este es el porcentaje del IVA

const valorIVA = precio * porcentajeIVA; // Calculamos el valor del IVA
const precioConIVA = precio + valorIVA; // Calculamos el precio con el IVA incluido

console.log(`El precio sin IVA es: ${precio}$`);
console.log(`El valor del IVA es: ${valorIVA}$`);
console.log(`El precio con IVA es: ${precioConIVA}$`);
