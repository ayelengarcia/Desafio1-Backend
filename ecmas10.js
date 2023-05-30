//PUSH agrega elemento a un array. Tengo que indicarle el array "const mensajes=[]"


// TRIM !!
//String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.

const saludos = "         Holaaa , saludos a mi amigo Andres Gaitan !!!  ";
console.log(saludos.trim());

const mensajes = [];
const mensaje1 = "   Yes!!!  ";
const mensaje2 = "    ";
const mensaje3 = "No  ";

//Si el mensaje no està vacìo, quiero que lo agregue y que le quite los espacios en blanco. Los agrega al array vacìo "mensajes", Si està vacio lo ignora, como es el caso dde mensaje2="  "
function addMessage(msn) {
  if (msn.trim() != "") mensajes.push(msn);
}

addMessage(mensaje1);
addMessage(mensaje2);
addMessage(mensaje3);

console.log(mensajes);


// FLAT
//Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.

const arrayAnidado = [
  1,
  4,
  12,
  52,
  -1212,
  0,
  [21, 56, 7, 12],
  90,
  91,
  [127, 122],
];

const result = arrayAnidado.flat();

console.log(result);

//Dynamic import: Permite importar sólo los módulos necesarios, ahorrando espacio y memoria.

const modo = "calculos";

async function exampleImport() {
  if (modo == "calculos") {
    // Importa libreria solo si la condicion is true
    const { default: Calculadora } = await import("./calcularoda.js");
    let calc = new Calculadora();
    console.log(calc.sumar(12, 18));
  }
}

exampleImport();
