import { get, post } from "./general";
import {
  Pago,
  Prestamo,
  PrestamoPagoResponse,
  PrestamoPrestamoResponse,
} from "./types";
import { IPrestamo } from "./interfaces/prestamo";

export function saludo() {
  get("/saludo");
}

export async function getUserInfo() {
  try {
    const res = await get("/user/info");
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserSaldo() {
  try {
    const res = await get("/user/saldo");
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserTarjeta() {
  try {
    const res = get("/user/tarjeta");
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function postTransferencia(data: {
  cuenta_destino: string;
  monto: number;
}) {
  console.log(data);
  try {
    const res = await post("/app/transferencia", data);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function postInvestment(data: {
  tipo_inversion: string;
  monto_invertido: number;
  fecha_inicio: string;
  fecha_fin: string;
  estado: string;
}) {
  try {
    const res = await post("/app/inversion", data);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function getInvestments() {
  try {
    const res = await get("/app/inversion/ver");
    return res;
  } catch (e) {
    console.log(e);
  }
}

export class PrestamoService implements IPrestamo {
  async solicitar(obj: Prestamo): Promise<PrestamoPrestamoResponse> {
    try {
      const res = await post("/app/prestamo", obj);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async pagar(obj: Pago): Promise<PrestamoPagoResponse> {
    try {
      const res = await post("/app/prestamo/pago", obj);
      return res;
    } catch (error) {
      throw error;
    }
  }
}
