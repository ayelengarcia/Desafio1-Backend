const valores = [1, 2, 4, 5, 8, 9];

//Función map() crear un array a partir de otro ECMAS7. Apoyando el cursor puedo ver los argumentos implicitos que tiene la función: value:number, index:idx, array: number[] (devuelve array completo)
const nuevosValores = valores.map((number, idx, array) => {
  console.log("Value:", number, "Índice:", idx, "Array:", array);
  return number + 1;
});
console.log("----------------------------------------------");
console.log("Suma + 1:", nuevosValores); //callback

//Con return implicito:
// const nuevosValores0 = valores.map((number, idx, array) => number + 1);

//Potencia a los numeros ** 2 ECMAS7. La constante "nuevosValores" recorre cada uno de los elementos del array "valores" y le dice a cada uno que lo eleve a la potencia indicada con la expresiòn **
const nuevoValores1 = valores.map((numero) => numero ** 2);
const nuevoValores2 = valores.map((numero, idx) => numero ** idx);

console.log("Potencia al 2:", nuevoValores1);
console.log("Potencia al idx:", nuevoValores2);
console.log("----------------------------------------------");

//Array con includes ECMAS7. Valor booleano, retorna TRUE o FALSE. JS es estricto con los string, si lleva una minuscula no lo encontraría.
const nombres = ["Valentin", "Carolina", "Agustin", "Exequiel", "Ayelen"];

console.log("Carolina", nombres.includes("Carolina")); //true
console.log("Oscar", nombres.includes("Oscar")); //false

console.log("Condicional. Ayelen está en la fiesta?");
if (nombres.includes("Ayelen")) {
  console.log("Sí, Ayelen llegó a la party !! 👯");
} else {
  console.log("No, la party esta aburrida sin Ayelen 😢");
}
