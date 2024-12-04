import { Operador } from "./operador.entities";
import { Producto } from "src/productos/entitis/producto.entities";

export class Pedido {
    date: Date;
    operador: Operador;
    products: Producto[];
};