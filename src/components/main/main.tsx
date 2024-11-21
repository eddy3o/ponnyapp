"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CreditCard, Lock, Zap, BarChart3, Menu, X } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center bg-[#000000] p-6 rounded-lg shadow-md border border-[#333]">
      {icon}
      <h4 className="text-2xl font-semibold mb-4 text-[#DE0D92]">{title}</h4>
      <p className="text-[#FFE3DC]">{description}</p>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  text: string;
}

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors block sm:inline"
    >
      {text}
    </Link>
  );
}

export default function LandingPage() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function toggleSideMenu() {
    setIsSideMenuOpen((prev) => !prev);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#E7E7E7] antialiased">
      <header className="p-4 sm:p-6 bg-black bg-opacity-50 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <CreditCard className="h-10 w-10 text-[#DE0D92]" />
            <h1 className="text-2xl font-light text-[#DE0D92]">Pony Pago</h1>
          </div>
          <button
            onClick={toggleSideMenu}
            className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors focus:outline-none"
            aria-label={isSideMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isSideMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSideMenu}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#111] z-30 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            href="/signin"
            className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors text-lg"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/signup"
            className="bg-[#9E1946] text-[#E7E7E7] px-4 py-2 rounded-lg hover:bg-[#DE0D92] transition-colors text-lg"
          >
            Registrarse
          </Link>
        </div>
      </div>

      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 pt-28 sm:pt-32 max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#DE0D92] mb-6">
            Bienvenido a <br className="hidden sm:inline" />
            Pony Pago
          </h2>
          <p className="text-xl sm:text-2xl text-[#FFE3DC] mb-8">
            Tu socio confiable en banca digital
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/login"
              className="inline-block bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
            >
              Comenzar Ahora
            </Link>
            <Link
              href="/about"
              className="inline-block border border-[#FFE3DC] text-[#FFE3DC] px-8 py-3 rounded-lg hover:bg-[#FFE3DC] hover:text-[#000000] transition-colors text-lg font-semibold"
            >
              Conoce Más
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 px-6 sm:px-0">
          {/* <div className="w-full h-64 bg-gradient-to-br from-[#9E1946] to-[#DE0D92] rounded-lg shadow-2xl flex items-center justify-center text-[#E7E7E7] text-2xl font-bold">
            Ilustración Pony Pago
          </div> */}
        </div>
      </main>

      <section id="features" className="py-16 bg-black bg-opacity-50 mt-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h3 className="text-3xl font-bold text-center text-[#DE0D92] mb-12">
            ¿Por qué elegir Pony Pago?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Lock className="h-16 w-16 mx-auto mb-6 text-[#FFE3DC]" />}
              title="Seguridad Avanzada"
              description="Protegemos tus finanzas con la más alta tecnología en seguridad digital."
            />
            <FeatureCard
              icon={<Zap className="h-16 w-16 mx-auto mb-6 text-[#FFE3DC]" />}
              title="Transacciones Rápidas"
              description="Realiza transferencias y pagos en segundos, sin complicaciones."
            />
            <FeatureCard
              icon={
                <BarChart3 className="h-16 w-16 mx-auto mb-6 text-[#FFE3DC]" />
              }
              title="Gestión Inteligente"
              description="Herramientas avanzadas para el control y análisis de tus finanzas personales."
            />
          </div>
        </div>
      </section>

      <footer className="bg-black bg-opacity-70 p-8 mt-16">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="flex flex-wrap justify-center mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
            <FooterLink href="#" text="Sobre Nosotros" />
            <FooterLink href="#" text="Términos de Servicio" />
            <FooterLink href="#" text="Política de Privacidad" />
            <FooterLink href="#" text="Contacto" />
          </div>
          <p className="text-sm text-[#FFE3DC] text-center">
            &copy; {new Date().getFullYear()} Pony Pago. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
export { LandingPage };
