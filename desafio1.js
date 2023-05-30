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
    const producto = {
      title,
      description,
      price,
      thumbnail,
      code: this.generarID(),
      stock: stock || 80,
    };

    this.products.push(producto);
  };

  mostrarProductos = () => {
    return this.products;
  };

  buscarProductosID = (ingresarID) => {
    let encontrado = this.products.filter(
      (producto) => producto.code === ingresarID
    );
    if (encontrado.length > 0) {
      return encontrado;
    } else {
      return "Producto no identificado.";
    }
  };
}

const producto = new ProductManager();
producto.agregarProducto("Taza", "Taza sublimable", 50, "#", "30");
producto.agregarProducto("TV", "Samdung 21Pulg", 20560, "#", "80");
producto.agregarProducto("Pañales Pampers", "Confort y cuidado", 1020, "#", "");

console.log("Listado de Productos:", producto.mostrarProductos());
console.log("----------------------------------------------");
console.log("Producto encontrado:", producto.buscarProductosID("PROD3"));
