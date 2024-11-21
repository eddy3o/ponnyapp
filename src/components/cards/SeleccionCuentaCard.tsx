import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";

const SeleccionCuentaCard = () => {
  return (
    <DefaultContainer>
      <div className="flex flex-col space-y-2 my-5">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
          Selecciona la cuenta
        </h1>
        <div className="relative overflow-hidden">
          <select className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none">
            <option
              value="cuenta1"
              className="bg-black  bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] hover:bg-pink-700 hover:text-white"
            >
              Cuenta 1
            </option>
            <option
              value="cuenta2"
              className="bg-black  bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] hover:bg-pink-700 hover:text-white"
            >
              Cuenta 2
            </option>
            <option
              value="cuenta3"
              className="bg-black  bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] hover:bg-pink-700 hover:text-white"
            >
              Cuenta 3
            </option>
          </select>
          <svg
            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-base text-gray-400 mt-1">
          Selecciona la cuenta para el pago de servicio.
        </p>
      </div>
    </DefaultContainer>
  );
};

export default SeleccionCuentaCard;