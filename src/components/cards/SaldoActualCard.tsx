import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";

const SaldoActualCard = ({ saldo }: { saldo: number }) => {
  return (
    <DefaultContainer>
      <h2 className="text-lg font-semibold">Saldo Actual</h2>
      {saldo !== null ? (
        <p className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
          ${saldo} MXN
        </p>
      ) : (
        <p>Cargando...</p>
      )}
    </DefaultContainer>
  );
};

export default SaldoActualCard;
