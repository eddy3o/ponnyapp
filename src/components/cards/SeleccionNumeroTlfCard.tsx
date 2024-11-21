import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";

const SeleccionNumeroTlfCard = () => {
  return (
    <DefaultContainer>
      <div className="flex flex-col space-y-2 mt-0 my-5">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
          Numero telefonico
        </h1>
        <input
          type="number"
          placeholder="443"
          className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none"
        />
        <p className="text-base text-gray-400 mt-1">
          Ingrese el numero telefonico al que desea realizar la recarga.
        </p>
      </div>
    </DefaultContainer>
  );
};

export default SeleccionNumeroTlfCard;
