import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";
import Buton from "../buttons/Buton";

const PrestamoRequestForm = () => {
  return (
    <DefaultContainer>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Crédito Disponible</h2>
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
            $10,000
          </p>
          <p className="text-xl">$6,000</p>
        </div>
        <p className="text-sm text-gray-400">40% del crédito utilizado</p>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-[#DE0D92] to-[#9E1946]"
          style={{ width: "60%" }}
        ></div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-2">
          Selecciona el plazo del préstamo:
        </p>
        <div className="flex justify-between">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-gradient-to-r hover:from-[#DE0D92] hover:to-[#9E1946]">
            3 meses
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-gradient-to-r hover:from-[#DE0D92] hover:to-[#9E1946]">
            6 meses
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-gradient-to-r hover:from-[#DE0D92] hover:to-[#9E1946]">
            12 meses
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Tasa de interés: <span className="font-semibold">12.00% APR</span>
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <Buton texto="Solicitar prestamo"></Buton>
        <Buton texto="Informacion de prestamo"></Buton>
      </div>
    </DefaultContainer>
  );
};

export { PrestamoRequestForm };
