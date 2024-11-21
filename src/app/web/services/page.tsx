"use client";
import React, { useState, useEffect } from "react";
import { DefaultContainer } from "@/components/container/DefaultContainer";
import { Gas } from "@/icons/gas";
import { Luz } from "@/icons/luz";
import { Agua } from "@/icons/agua";
import { Internet } from "@/icons/internet";
import ServiciosCard from "@/components/cards/ServiciosCard";
import CompanyCard from "@/components/cards/CompanyCard";

const services = [
  { id: 1, name: "Luz", icon: <Luz /> },
  { id: 2, name: "Agua", icon: <Agua /> },
  { id: 3, name: "Internet", icon: <Internet /> },
  { id: 4, name: "Gas", icon: <Gas /> },
];

const ServicesPage = () => {
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<{
    id: number;
    name: string;
    icon: JSX.Element;
  } | null>(null);
  const [companySearch, setCompanySearch] = useState("");
  interface Company {
    name: string;
    // Add other properties if needed
  }

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [saldoActual, setSaldoActual] = useState(0);
  const [importe, setImporte] = useState("");

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const saldoInicial = parseFloat(data.saldoActual.replace(/,/g, ""));
        setSaldoActual(saldoInicial);
      } catch (error) {
        console.error("Error al cargar el saldo:", error);
      }
    };

    fetchSaldo();
  }, []);

  const handlePayment = () => {
    const paymentAmount = parseFloat(importe);

    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      alert("Por favor, ingresa un importe válido.");
      return;
    }

    if (paymentAmount > saldoActual) {
      alert("Saldo insuficiente para realizar el pago.");
      return;
    }

    setSaldoActual(saldoActual - paymentAmount);
    if (selectedCompany) {
      alert(
        `Pago de ${selectedCompany.name} realizado por $${paymentAmount.toFixed(
          2
        )}`
      );
    }

    setImporte("");
    setSelectedCompany(null);
  };

  return (
    <main className="px-10 py-3">
      <section className="mt-4 flex flex-col gap-4">
        <DefaultContainer>
          {!selectedService && (
            <div className="w-full mb-5">
              <div className="flex">
                <h2 className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946] mb-4">
                  Pago de servicios
                </h2>
              </div>
              <input
                type="text"
                placeholder="Buscar servicio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 rounded-lg bg-transparent border-secondary border-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          )}

          {selectedService && !selectedCompany ? (
            <>
              <button
                onClick={() => {
                  setSelectedService(null);
                  setCompanySearch("");
                }}
                className=" text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946] mb-4"
              >
                ←
              </button>

              <div className="w-full mb-5">
                <input
                  type="text"
                  placeholder={`Buscar compañía de ${selectedService.name}...`}
                  value={companySearch}
                  onChange={(e) => setCompanySearch(e.target.value)}
                  className="w-full p-3 rounded-lg bg-transparent border-secondary border-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <CompanyCard
                serviceName={selectedService.name}
                companySearch={companySearch}
                onSelect={(company: Company) => setSelectedCompany(company)}
              />
            </>
          ) : selectedCompany ? (
            <>
              <button
                onClick={() => setSelectedCompany(null)}
                className="mb-5 flex items-center text-pink-500 hover:underline"
              >
                ← Regresar a compañías
              </button>

              <div className="w-full mb-5">
                <h2 className="text-white mb-3">
                  Pagar a {selectedCompany.name}
                </h2>
                <input
                  type="text"
                  placeholder="Número de contrato"
                  className="w-full p-3 rounded-lg bg-transparent border-secondary border-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <input
                  type="number"
                  placeholder="Importe"
                  value={importe}
                  onChange={(e) => setImporte(e.target.value)}
                  className="w-full p-3 rounded-lg bg-transparent border-secondary border-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <button
                  onClick={handlePayment}
                  className="w-full p-3 mt-3 rounded-lg bg-pink-500 text-white font-bold"
                >
                  Realizar pago
                </button>
              </div>

              <p className="text-white mt-5">
                Saldo actual: ${saldoActual.toFixed(2)}
              </p>
            </>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <ServiciosCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  icon={service.icon}
                  onSelect={() => setSelectedService(service)}
                />
              ))}
            </div>
          )}
        </DefaultContainer>
      </section>
    </main>
  );
};

export default ServicesPage;
