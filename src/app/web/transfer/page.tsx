"use client";
import { CardOverview, DefaultContainer } from "@/components";
import { useTransferencia } from "@/hooks";
import React from "react";

const Transfer = () => {
  const {
    handleSubmit,
    handleInputChange,
    formData,
    modalVisible,
    setModalVisible,
  } = useTransferencia();

  return (
    <main className="px-10 py-3">
      <section className="mt-4 flex flex-col gap-4">
        <CardOverview />
        <DefaultContainer>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 mt-0 my-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
                Ingrese la cuenta destino
              </h1>
              <input
                type="text"
                placeholder="01102984290"
                className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none"
                name="cuenta_destino"
                onChange={handleInputChange}
              />
              <p className="text-base text-gray-400 mt-1">
                Ingrese el numero de la cuenta destinataria para recibir la
                transaccion.
              </p>
            </div>
            <div className="flex flex-col space-y-2 mt-0 my-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-xl font-semibold">
                Ingrese el importe a pagar
              </h1>
              <input
                type="number"
                placeholder="0.00"
                className="appearance-none w-full bg-black text-white p-3 rounded-lg focus:outline-none"
                name="monto"
                onChange={handleInputChange}
              />
              <p className="text-base text-gray-400 mt-1">
                Escribe el monto para realizar el pago.
              </p>
            </div>
            <div className="flex flex-col space-y-2 my-5">
              <input
                onClick={() => setModalVisible(true)}
                type="submit"
                value="Transferir"
                className="w-full bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
              />
              {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg p-6 text-center shadow-lg w-80">
                    <h2 className="text-2xl font-bold text-green-500">
                      ¡Transferencia exitosa! {formData.cuenta_destino}
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Tu transferencia se realizó con éxito. Transferiste{" "}
                      {formData.monto}
                    </p>
                    <button
                      onClick={() => setModalVisible(false)}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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
  );
};

export default Transfer;
