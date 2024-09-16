
const numeros = [1, 2, 3, 4, 5];
const strings = ["muchos", "gatos"];

// Función que recibe un array de números y retorna la suma de todos los números del array
function sumarArray(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log("La suma de [1, 2, 3, 4, 5] es:", sumarArray(numeros)); 

// Función que recibe un array de números y retorna el promedio de todos los números del array
function promedioArray(numeros) {
  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  return suma / numeros.length;
}

console.log("Promedio de [1, 2, 3, 4, 5]", promedioArray(numeros)); 

// Función que toma un arreglo de strings y devuelve un nuevo arreglo con todas las letras en mayúsculas
function convertirMayusculasArray(strings) {
  return strings.map(string => string.toUpperCase());
}

console.log("muchos, gatos= ", convertirMayusculasArray(strings)); 

// Función que toma un arreglo de números y devuelve un nuevo arreglo con solo los números pares
function filtrarPares(numeros) {
  return numeros.filter(numero => numero % 2 === 0);
}

console.log("Los pares son: ", filtrarPares(numeros)); 


