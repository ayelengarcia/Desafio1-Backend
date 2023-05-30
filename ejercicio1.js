const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

let obj1 = Object.keys(objetos[0]);
let obj2 = Object.keys(objetos[1]);

const obj3 = [...obj1, ...obj2];

console.log(obj3);
console.log("-------------------------");


let objetosNuevos = [];

objetos.forEach((objeto) => {
  const nombreProductos = Object.keys(objeto);
  nombreProductos.forEach((tipo) => {
    if (!objetosNuevos.includes(tipo)) {
      objetosNuevos.push(tipo);
    }
  });
});

console.log(objetosNuevos);
console.log("-------------------------");


const TOTAL = objetos.reduce((acc, item) => {
  Object.values(item).forEach((element) => {
    if (typeof element === "number") {
      acc += element;
    }
  });

  return acc;
}, 0);

console.log(TOTAL);
