import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";

const AhorrosCard = () => {
  return (
    <DefaultContainer>
      <h2 className="text-lg font-semibold">Ahorros</h2>
      <p className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
        $10,000.00
      </p>
    </DefaultContainer>
  );
};

export default AhorrosCard;
