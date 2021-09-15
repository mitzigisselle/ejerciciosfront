

// 4. Pedir al usuario que ingrese una cantidad, la cantidad ingresada por el usuario sera el numero de iteraciones 
//que hara el programa, en cada iteracion pedirle al usuario que ingrese un numero, al final imprimir la suma de 
//cada numero ingresado por el usuario.

let numero=prompt("Ingresa un numero");
let suma=0;

if(parseInt(numero)){
  for(let i=0; i<numero; i++){
    let digitos=prompt(`Ingresa un numero ${i+1}`);
    suma=suma+parseInt(digitos);
  }
  document.write(`La suma total de los numeros que ingresaste es: ${suma}`);
}


