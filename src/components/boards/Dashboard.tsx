"use client";
import React from "react";
import SaldoActualCard from "./../cards/SaldoActualCard";
import GastosCard from "./../cards/GastosCard";
import IngresosCard from "./../cards/IngresosCard";
import AhorrosCard from "./../cards/AhorrosCard";
import GraficaFinanzas from "../graphics/GraficaFinanzas";
import { useDashboard } from "@/hooks/home/useDashboard";
import { Loader } from "lucide-react";

const Dashboard = () => {
  const { nombre, saldo, loading } = useDashboard();

  return (
    <>
      {!loading ? (
        <>
          <div className="flex">
            <h2 className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
              Bienvenido {nombre}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SaldoActualCard saldo={saldo} />
            <GastosCard />
            <IngresosCard />
            <AhorrosCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <GraficaFinanzas />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export { Dashboard };
