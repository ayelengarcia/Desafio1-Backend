const iva = 0.21;

class TicketManager {
  #precioBaseDeGanancia;
  constructor() {
    this.events = [];
    this.#precioBaseDeGanancia = iva;
  }

  generarID = () => {
    const contador = this.events.length;

    if (contador > 0) {
      return this.events[contador - 1].id + 1;
    } else {
      return 1;
    }
  };

  agregarEvento = (nombre, lugar, precio, capacidad, fecha) => {
    const evento = {
      id: this.generarID(),
      nombre,
      lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad: capacidad || 50,
      fecha: fecha || new Date().toLocaleDateString(),
    };

    this.events.push(evento);
  };

  mostrarEventos = () => {
    return this.events;
  };
}

const manager = new TicketManager();

manager.agregarEvento("Lolapaluza", "Corferias", 100, 0);
manager.agregarEvento("Afterlife", "Medellin", 240, 20);

console.log(manager.mostrarEventos());
