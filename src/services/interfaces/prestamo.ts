import {
  Prestamo,
  PrestamoPrestamoResponse,
  Pago,
  PrestamoPagoResponse,
} from "../types";

export interface IPrestamo {
  solicitar: (obj: Prestamo) => Promise<PrestamoPrestamoResponse>;
  pagar: (obj: Pago) => Promise<PrestamoPagoResponse>;
}
