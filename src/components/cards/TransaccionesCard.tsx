import React from "react";
import Transaccion from "./Transaccion";
import { DefaultContainer } from "../container/DefaultContainer";
const TransaccionesCard = () => {
  return (
    <DefaultContainer>
      <h2 className="text-lg font-semibold">Últimas Transacciones</h2>
      <ul className="mt-4">
        <Transaccion
          titulo="Depósito de nómina"
          cantidad="+$3,500.00"
          fecha="12 Octubre 2024"
          esPositiva={true}
        />
        <Transaccion
          titulo="Pago de servicios"
          cantidad="-$150.00"
          fecha="11 Octubre 2024"
          esPositiva={false}
        />
        <Transaccion
          titulo="Transferencia recibida"
          cantidad="+$500.00"
          fecha="10 Octubre 2024"
          esPositiva={true}
        />
        <Transaccion
          titulo="Compra en línea"
          cantidad="-$89.99"
          fecha="09 Octubre 2024"
          esPositiva={false}
        />
      </ul>
    </DefaultContainer>
  );
};

export default TransaccionesCard;
