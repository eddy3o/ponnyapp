import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";

const IngresosCard = () => {
  return (
    <DefaultContainer>
      <h2 className="text-lg font-semibold">Ingresos del Mes</h2>
      <p className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
        $5,678.00
      </p>
      <p className="text-sm text-green-500 mt-1">↑ 2.8%</p>
    </DefaultContainer>
  );
};

export default IngresosCard;
