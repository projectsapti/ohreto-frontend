import { DetalleVenta } from './detalle-venta';
import { Cliente } from '../../clientes/cliente';

export class Venta {
  id: number;
  descripcion: string;
  observacion: string;
  items: Array<DetalleVenta> = [];
  cliente: Cliente;
  total: number;
  createAt: string;

  calcularGranTotal(): number {
    this.total = 0;
    this.items.forEach((item: DetalleVenta) => {
      this.total += item.calcularImporte();
    });
    return this.total;
  }
}
