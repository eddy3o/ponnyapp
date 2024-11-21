export interface PrestamoPrestamoResponse {
  message: string;
  prestamo: Prestamo;
  total_a_pagar: number;
}

export interface Prestamo {
  id?: number;
  cuenta_id?: number;
  monto_solicitado: number;
  interes: number;
  mensualidades: number;
  limite_credito?: number;
  estado?: string;
  fecha_vencimiento?: string;
  fecha_solicitud?: string;
}

export interface Pago {
  prestamo_id?: number;
  monto_pago: number;
  fecha_pago?: string;
  estado?: string;
}

export interface PrestamoPagoResponse {
  message: string;
  pago: Pago;
  prestamo: Prestamo;
  nuevo_saldo_a_pagar: number;
}

/**
  * 
  * {
  "tipo_inversion": "acciones",
  "monto_invertido": 5000,
  "fecha_inicio": "2024-11-21",
  "fecha_fin": "2025-11-21",
  "estado": "activa"
}
{
  "inversiones": [
    {
      "cuenta_id": 1,
      "tipo_inversion": "acciones",
      "monto_invertido": 5000,
      "fecha_inicio": "2024-11-21",
      "fecha_fin": "2025-11-21",
      "estado": "activa",
      "rendimiento": 150
    },
    {
      "cuenta_id": 1,
      "tipo_inversion": "bonds",
      "monto_invertido": 3000,
      "fecha_inicio": "2024-01-15",
      "fecha_fin": "2024-12-15",
      "estado": "activa",
      "rendimiento": 90
    }
  ]
}

  */

export interface Inversion {
  id?: number;
  cuenta_id?: number;
  tipo_inversion: string;
  monto_invertido: number;
  fecha_inicio: string;
  fecha_fin: string;
  estado?: string;
  rendimiento?: number;
}
