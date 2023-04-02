var peso = 105; // en kilogramos
var altura = 180; // en centímetros
var imc = calcularIMC(peso, altura);
console.log("Tu índice de masa corporal es: " + imc);

function calcularIMC(peso, altura) {

    // Convertir la altura a metros
    altura = altura / 100;
  
    // Calcular el índice de masa corporal
    var imc = peso / (altura * altura);
  
    // Redondear a dos decimales
    imc = imc.toFixed(2);
  
    // Devolver el resultado
    return imc;
  }
  
  // Ejemplo de uso

  