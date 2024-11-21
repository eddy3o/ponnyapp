import { SigninForm } from "@/components";
import Header from "@/components/nav/Header";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#E7E7E7]">
      <Header />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <SigninForm />
        </div>
      </main>

      <footer className="bg-[#111] border-t border-[#333] p-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link
              href="#"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Términos de Servicio
            </Link>
            <Link
              href="#"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
          <p className="text-sm text-[#FFE3DC]">
            &copy; {new Date().getFullYear()} Pony Pago. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Signin;
