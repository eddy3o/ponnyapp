"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SpecialContainer } from "../container/SpecialContainer";
import { getUserTarjeta } from "@/services";
import { Loader } from "lucide-react";

const CardOverview = () => {
  const [numero_tarjeta, setNumero_tarjeta] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getUserTarjeta();
        setNumero_tarjeta(res.numero_tarjeta);
        setSaldo(res.saldo);
      } catch (error) {
        console.error("Error fetching user tarjeta:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SpecialContainer>
        {!loading ? (
          <>
            <h1 className="font-bold text-2xl mb-4 text-titulos">
              Cuenta princial
            </h1>
            <p className="text-white text-opacity-60">Saldo disponible</p>
            <div className="flex justify-between items-baseline">
              <p className="text-4xl font-bold">$ {saldo}</p>
              <p className="align-baseline text-gray-400 text-opacity-80 text-lg">
                {numero_tarjeta}
              </p>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </SpecialContainer>
    </>
  );
};

export { CardOverview };
