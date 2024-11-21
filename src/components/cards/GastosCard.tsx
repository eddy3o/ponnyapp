import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";

const GastosCard = () => {
  return (
    <DefaultContainer>
      <h2 className="text-lg font-semibold">Gastos del Mes</h2>
      <p className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
        $2,345.00
      </p>
      <p className="text-sm text-red-600 mt-1">↓ 5.2%</p>
    </DefaultContainer>
  );
};

export default GastosCard;
