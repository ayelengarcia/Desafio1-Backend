class ProductManager {
  constructor() {
    this.products = [];
    this.primerID = 1;
  }

  generarID() {
    const ID = "PROD" + this.primerID;
    this.primerID++;
    return ID;
  }

  agregarProducto = (title, description, price, thumbnail, stock) => {
    if (!title || !description || !price || !thumbnail) return "Todos los campos son obligatorios."
    const codeExiste = this.products.some((producto) => producto.code === this.generarID());
    if (codeExiste) return "El código ID del producto ya existe";

    const producto = {
      title,
      description,
      price,
      thumbnail,
      stock: stock || 80,
      code: this.generarID(),
    };

    this.products.push(producto);
    return "Producto agregado exitosamente.";
  };

  mostrarProductos = () => {
    return this.products;
  };

  buscarProductosID = (ingresarID) => {
    let encontrado = this.products.filter((producto) => producto.code === ingresarID);
    if (encontrado.length > 0) {
      return encontrado;
    } else {
      return "Producto no identificado.";
    }
  };
}

const producto = new ProductManager();
console.log(producto.agregarProducto("Taza", "Taza sublimable", 50, "#", "30"));
console.log(producto.agregarProducto("TV", "Samdung 21Pulg", 20560, "#", "70")); 
console.log(producto.agregarProducto("Pañales Pampers", "Confort y cuidado", 1020, "#", "50")); 
console.log(producto.agregarProducto("Taza 2", "", "", "#", "30")); //Todos los campos son obligatorios.

console.log("Listado de Productos:", producto.mostrarProductos());
console.log("----------------------------------------------");
console.log("Producto encontrado:", producto.buscarProductosID("PROD3"));
