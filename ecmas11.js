//operador OR ||  compara los elementos dependiendo de si el valor asignado es true o false (boolean) y hace una valoraciòn implicita, 0 es false (0 == false), entonces devuelve false. Devuelve siempre la primer opciòn si es true, si es false devuelve la siguiente

const varTest = 0; //false
const varAsignable = varTest || "Sin Valor"; //devuelve "Sin valor"
console.log(varAsignable);

//Nullish ?? compara los elementos dependiedo si el valor asignado es true o false (boolean), pero se pregunta si el valor es extrictamente igual al valor que le asigne. 0 es false, esto es cierto? (0===false ?). Si digo que var=0 devuelve true

const varTest2 = 0; //true
const varAsignable2 = varTest2 ?? "Sin Valor"; //devuelve "0"
console.log(varAsignable2);

// Private Attributes. Solo puedo acceder a ellos deltro del scoope donde se creo el atributo privado. Por fuera puedo acceder si creo un mètodo para luego llamarlo.

class Persona {
  #fullname;

  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.#fullname = `${name} ${lastname}`;
  }

  getFullname = () => {
    return this.#fullname;
  };
}

//Solo accedo a name y lastname porque no son privados
const nicolas = new Persona("nicolas", "ayala");
//Me devuelve el objeto constructor
console.log("Objeto constructor:", nicolas);
console.log("Atributo name:", nicolas.name);
console.log("Atributo Lastname:", nicolas.lastname);

//accedo al fullname a travès del mètodo
nicolas.getFullname();
console.log("Atributo privado:", nicolas.getFullname());
