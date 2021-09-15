// 8 - Escribir un programa que permita al usuario ingresar 6 números enteros, que pueden ser positivos o negativos. 
//Al finalizar, mostrar la sumatoria de los números negativos y el promedio de los positivos.

let sum={};
for(let i=0; i<6; i++){
  sum[i]=prompt(`Ingresa un numero: ${i+1}`);
};

let suma=0;
for(let i=0; i<6; i++){
  suma=suma+parseInt(sum[i]);
};


document.write(`suma total: ${suma}`);


