// CÓMO CALCULAR EL IMC (INDICE DE MASA CORPORAL
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
  
  var peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
  var altura = parseFloat(prompt("Ingresa tu altura en metros:"));
  
  var imc = calcularIMC(peso, altura);
  
  alert("Tu índice de masa corporal es: " + imc);
