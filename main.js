function par_impar(numero) {
  if (numero % 2 == 0) {
    console.log(numero + " es par");
  } else {
    console.log(numero + " es impar");
  }
}

//par_impar(3);
//par_impar(4);

function mayor(num_1, num_2) {
  if (num_1 > num_2) {
    console.log(num_1 + " es mayor que " + num_2);
  } else if (num_1 < num_2) {
    console.log(num_2 + " es mayor que " + num_1);
  } else {
    console.log(num_1 + " y " + num_2 + " son iguales ");
  }
}

//mayor(50,89);
//mayor(67,13);
//mayor(10,10);

function multiplos_de_5(numero) {
  if (numero % 5 == 0) {
    console.log(numero + " es multiplo de 5");
  } else {
    console.log(numero + " no es multiplo de 5");
  }
}

//multiplos_de_5(10);
//multiplos_de_5(4);

function imprimir_numero(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

//imprimir_numero(8)

function imprimirNVeces(palabra, numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(palabra);
  }
}

//imprimirNVeces('Hello',5)

function imprimir_array(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
//const miArrar = ["flor", "casa", "perro", "nube", "sol"];
//imprimir_array(miArrar);

function arrayConNumeros(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

//const newArray=[1,2,3,4,5,6,7,8,9,10];
//arrayConNumeros(newArray);
function multiplicarPorNumero(array, multiplicador) {
  for (let i = 0; i < array.length; i++) {
    let resultado = array[i] * multiplicador;
    console.log(resultado);
  }
}

const miArray = [1, 2, 3, 4, 5];
const multiplicar = 5;
multiplicarPorNumero(miArray, multiplicar);
