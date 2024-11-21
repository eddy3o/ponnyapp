"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  DollarSign,
  Smartphone,
  Zap,
  PieChart,
  BarChart2,
  Lock,
  Menu,
  X,
} from "lucide-react";

// Definimos los tipos de las propiedades que recibirá ServiceCard y FeatureCard
interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function ServiciosLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#E7E7E7] antialiased">
      <header className="p-4 sm:p-6 bg-black bg-opacity-50 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8 text-[#DE0D92]" />
            <h1 className="text-2xl font-light text-[#DE0D92]">Pony Pago</h1>
          </div>
          <nav className="hidden md:block space-x-4">
            <Link
              href="/"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <button
            className="md:hidden text-[#FFE3DC]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#"
                className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#DE0D92] mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-[#FFE3DC] mb-12 max-w-3xl mx-auto">
              Pony Pago: Tu plataforma integral de banca en línea. Experimenta
              la libertad financiera con nuestros servicios simulados y aprende
              a manejar tus finanzas de manera inteligente.
            </p>
          </div>
        </section>

        <section id="servicios" className="py-20 px-4 bg-[#111]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<DollarSign className="h-12 w-12 text-[#DE0D92]" />}
              title="Inversiones"
              description="Genera intereses del 0.03% diario hasta un monto máximo de $10,000 pesos. Visualiza tu rendimiento con gráficas detalladas."
            />
            <ServiceCard
              icon={<Zap className="h-12 w-12 text-[#DE0D92]" />}
              title="Transferencias"
              description="Transfiere dinero de forma rápida y segura entre cuentas Pony Pago."
            />
            <ServiceCard
              icon={<Smartphone className="h-12 w-12 text-[#DE0D92]" />}
              title="Recargas y Pagos"
              description="Realiza recargas de saldo y paga servicios directamente desde tu cuenta."
            />
            <ServiceCard
              icon={<CreditCard className="h-12 w-12 text-[#DE0D92]" />}
              title="Tarjeta Digital"
              description="Utiliza tu saldo Pony Pago con nuestra tarjeta digital para compras en línea."
            />
            <ServiceCard
              icon={<BarChart2 className="h-12 w-12 text-[#DE0D92]" />}
              title="Préstamos"
              description="Solicita préstamos personalizados con diferentes plazos y tasas de interés."
            />
            <ServiceCard
              icon={<PieChart className="h-12 w-12 text-[#DE0D92]" />}
              title="Gestión Financiera"
              description="Monitorea tus inversiones, préstamos y gastos con herramientas de análisis avanzadas."
            />
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#DE0D92] mb-6">
              ¿Por qué elegir Pony Pago?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <FeatureCard
                icon={<Lock className="h-10 w-10 text-[#FFE3DC]" />}
                title="Seguridad Simulada"
                description="Aprende sobre seguridad financiera en un entorno sin riesgos reales."
              />
              <FeatureCard
                icon={<PieChart className="h-10 w-10 text-[#FFE3DC]" />}
                title="Análisis Detallado"
                description="Visualiza tu progreso financiero con gráficas y reportes completos."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-[#FFE3DC]" />}
                title="Operaciones Rápidas"
                description="Realiza transacciones y pagos en segundos, sin complicaciones."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-70 p-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#FFE3DC]">
            &copy; {new Date().getFullYear()} Pony Pago. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-[#FFE3DC] mt-2">
            Pony Pago es una plataforma de simulación financiera. No se utiliza
            dinero real.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Añadimos los tipos para que TypeScript los reconozca
function ServiceCard({ icon, title, description }: CardProps) {
  return (
    <div className="bg-[#000000] border border-[#333] rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
      {icon}
      <h3 className="text-2xl font-semibold text-[#DE0D92] mt-4 mb-2">
        {title}
      </h3>
      <p className="text-[#FFE3DC]">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: CardProps) {
  return (
    <div className="bg-[#111] border border-[#333] rounded-lg p-6 flex flex-col items-center text-center">
      <div className="bg-[#9E1946] rounded-full p-3 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-[#DE0D92] mb-2">{title}</h4>
      <p className="text-[#FFE3DC]">{description}</p>
    </div>
  );
}
export { ServiciosLanding };
