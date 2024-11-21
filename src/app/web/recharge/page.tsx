import React from "react";
import { DefaultContainer } from "@/components/container/DefaultContainer";
import CompañiaTelefonicaCard from "@/components/cards/CompañiaTelefonicaCard";
import SeleccionNumeroTlfCard from "@/components/cards/SeleccionNumeroTlfCard";
import SeleccionPagoCard from "@/components/cards/SeleccionPagoCard";
import { CardOverview } from "@/components";
import SeleccionCuentaCard from "@/components/cards/SeleccionCuentaCard";
import Buton from "@/components/buttons/Buton";

const Recharge = () => {
  return (
    <main className="px-10 py-3">
      <section className="mt-4 flex flex-col gap-4">
        <CardOverview />
        <DefaultContainer>
          <CompañiaTelefonicaCard />
          <SeleccionNumeroTlfCard />
          <SeleccionPagoCard />
          <SeleccionCuentaCard />
          <div className="flex flex-col space-y-2 my-5">
            <Buton texto="Continuar"></Buton>
          </div>
        </DefaultContainer>
      </section>
    </main>
  );
};

export default Recharge;
