//ARRAY
const IMPUESTOS0 = [
  { impuesto1: 241 },
  { impuesto2: 251 },
  { impuesto3: 262 },
  { impuesto4: 350 },
];

//OBJETO
const IMPUESTOS = {
  impuesto1: 241,
  impuesto2: 251,
  impuesto3: 262,
  impuesto4: 350,
};

//Objets.entries
let parLlaveValor = Object.entries(IMPUESTOS);
console.log(parLlaveValor); //resultado [[imp:valor],[imp:valor],[imp:valor],[imp:valor]]. Me devuelve un array con cada elemento distribuido en un subarray con la propiedad (key: nombre) y el valor. En caso de querer usarlas por separado

//Objets.keys
let soloPropiedades = Object.keys(IMPUESTOS);
console.log(soloPropiedades); //Obtiene en un array sólo las propiedades del objeto, sin necesidad de su valor.

//Objet.value
let soloValores = Object.values(IMPUESTOS);
console.log(soloValores); ////Obtiene en un array sólo los valores del objeto, sin necesidad de su valor.

//Con los valores del objeto podemos utilizarlos para hacer una acumulacion total de los valores por ejemplo con el mètodo REDUCE:

let impuestosTotales = soloValores.reduce((acumulacion, valorActual) => {
  console.log(acumulacion, valorActual);

  return acumulacion + valorActual;
}, 0);

//El tercer argumento "0" indica desde donde se va sumando el acumulado
console.log(impuestosTotales);
