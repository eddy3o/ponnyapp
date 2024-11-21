"use client";
import { CardOverview, DefaultContainer } from "@/components";
import { useInvestmentCreation } from "@/hooks";
import React from "react";

const InvestmentCreatePage = () => {
  const { formData, handleInputChange, handleSubmit, modalVisible } =
    useInvestmentCreation();

  return (
    <div>
      <main className="px-10 py-3">
        <section className="mt-4 flex flex-col gap-4">
          <CardOverview />
          <DefaultContainer>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2 mt-0 my-5">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
                  Tipo de Inversión
                </h1>
                <select
                  name="tipo_inversion"
                  className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none"
                  onChange={handleInputChange}
                  value={formData.tipo_inversion}
                >
                  <option value="">Seleccione un tipo de inversión</option>
                  <option value="acciones">Acciones</option>
                  <option value="bonos">Bonos</option>
                  <option value="fondos">Fondos</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2 mt-0 my-5">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
                  Monto Invertido
                </h1>
                <input
                  type="number"
                  placeholder="0.00"
                  className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none"
                  name="monto_invertido"
                  onChange={handleInputChange}
                  value={formData.monto_invertido}
                />
              </div>

              <div className="flex flex-col space-y-2 mt-0 my-5">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
                  Fecha de Fin
                </h1>
                <input
                  type="date"
                  className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none"
                  name="fecha_fin"
                  onChange={handleInputChange}
                  value={formData.fecha_fin}
                />
              </div>

              <div className="flex flex-col space-y-2 my-5">
                <input
                  type="submit"
                  value="Invertir"
                  className="w-full bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                />
                {modalVisible && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="border-secondary border-4 px-5 py-5 rounded-lg text-xl background-container">
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-2xl font-semibold">
                        ¡Inversión registrada!
                      </h2>
                      <p className="text-white mt-2">
                        Tu inversión ha sido registrada con éxito.
                      </p>
                      <button
                        onClick={() => {
                          window.location.href = "/web/investment";
                        }}
                        className="mt-5 bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </DefaultContainer>
        </section>
      </main>
    </div>
  );
};

export default InvestmentCreatePage;
