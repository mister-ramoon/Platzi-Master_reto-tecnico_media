let arregloNumeros = [2, 4, 5, 54, 27, 21, 32, 3718, 218, 1917, 642];
let logitudArreglo = arregloNumeros.length;
let sumaDeArreglo = 0;
let resultado = 0;

for (let i = 0; i < logitudArreglo; i++) {
  sumaDeArreglo = sumaDeArreglo + arregloNumeros[i];
}
resultado = sumaDeArreglo / logitudArreglo;

console.log(`Media Aritmética: ${resultado.toFixed(2)}`);
