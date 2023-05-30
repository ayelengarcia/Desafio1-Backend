const obj1 = {
  field11: 222,
  field22: "Romina",
  field33: true,
  field44: "Agistin Sivila",
  field66: 666,
};

const obj2 = {
  field1: "[TUTOR] Santiago",
  field2: [2, 3, 4, 6, 7],
};

//DESESTRUCTURING. Me permite hacer un callback de unna propiedad del objeto sin ingresar desde "obj1"
const { field22, field33 } = obj1;
console.log(field22, field33);
console.log("----------------------------");

// SPREAD OPERATOR
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
console.log("----------------------------");

// REST OPERATOR. Me permite quitar elementos del objeto y mostrar el "resto"
const obj4 = {
  field111: 222,
  field222: "R2",
  field333: false,
  field444: "Marco Giabbani",
  field666: 666,
};

const { field111, field222, ...rest } = obj4;
console.log(rest);
console.log(field111); //al desestructurar puedo ingresar a los elementos por separado
