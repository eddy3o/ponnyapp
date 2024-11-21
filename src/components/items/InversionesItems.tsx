import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";
import { Inversion } from "@/services/types";

interface InversionesItemsProps {
  inversion: Inversion;
}

const InversionesItems: React.FC<InversionesItemsProps> = ({ inversion }) => {
  return (
    <DefaultContainer>
      <h2 className="text-lg font-semibold text-gray-100">
        Inversión en {inversion.tipo_inversion}
      </h2>
      <div className="flex justify-between items-center mt-2">
        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
          ${inversion.monto_invertido.toFixed(2)}
        </p>
        <p
          className={`text-sm font-semibold ${
            inversion.estado === "activa" ? "text-green-400" : "text-red-400"
          }`}
        >
          Estado: {inversion.estado}
        </p>
      </div>
      <p className="text-sm text-gray-400 mt-1">
        Fecha de Inicio:{" "}
        <span className="font-semibold">
          {new Date(inversion.fecha_inicio).toLocaleDateString()}
        </span>
      </p>
      <p className="text-sm text-gray-400">
        Fecha de Fin:{" "}
        <span className="font-semibold">
          {new Date(inversion.fecha_fin).toLocaleDateString()}
        </span>
      </p>
      <div className="w-full bg-gray-700 rounded-full h-3 my-6">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-[#DE0D92] to-[#9E1946]"
          style={{ width: "10%" }}
        ></div>
      </div>
      <h3 className="text-md font-semibold text-gray-100 mb-2">
        Detalles de la Inversión
      </h3>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Rendimiento Actual:</p>
          <p className="text-2xl font-bold text-green-400">
            ${(inversion.rendimiento ?? 0).toFixed(2)}
          </p>
        </div>
        <div>
          <button className="bg-red-700 text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer text-base">
            Cancelar
          </button>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default InversionesItems;
