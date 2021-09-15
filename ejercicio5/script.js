
// 5. Pedir al usuario que ingrese una palabra o frase y luego imprimir un listado de la cantidad de vocales 
//que aparecen en esa palabra o frase.

let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;    //Devuelve la longitud del string.
cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
let caracter;
let contador = 0;
let i;

  for (i = 0; i < numchar; i++) {
    caracter = cadena.charAt(i);    //recupera el caracter i del string.
    if ((caracter == "A") || (caracter == "E") || (caracter == "I") || (caracter == "O") || (caracter == "U")) {
      contador++;
    }
  }
document.write("Número de Vocales: " + contador + ".");