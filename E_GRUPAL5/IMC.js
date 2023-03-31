// CÓMO CALCULAR EL IMC (INDICE DE MASA CORPORAL)
function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2); // Redondeamos el resultado a dos decimales
}

// Ejemplo de uso
var peso = 80; // en kilogramos
var altura = 1.75; // en metros
var imc = calcularIMC(peso, altura);
console.log("El IMC es: " + imc);