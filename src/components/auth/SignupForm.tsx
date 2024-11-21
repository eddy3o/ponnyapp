"use client";

import React from "react";
import {
  User,
  Mail,
  Lock,
  CreditCard,
  Phone,
  House,
  Loader,
} from "lucide-react";
import Link from "next/link";
import { useSignup } from "@/hooks";

export default function SignupForm() {
  const { handleInputChange, handleSubmit, error, loading } = useSignup();

  return (
    <>
      {!loading ? (
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] border border-[#333] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="text-center mb-8">
            <CreditCard className="h-16 w-16 text-[#DE0D92] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#DE0D92] mb-2">
              Pony Pago
            </h2>
            <p className="text-[#FFE3DC] text-lg">
              Tu banco digital de confianza
            </p>
          </div>

          <div className="mb-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirmar contraseña"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
              <input
                type="text"
                placeholder="Teléfono"
                name="telefono"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <select
                name="telefono_tipo"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
                defaultValue="celular"
              >
                <option value="celular">Celular</option>
                <option value="fijo">Fijo</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <House className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
              <input
                type="text"
                placeholder="Dirección"
                name="direccion"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <select
                name="direccion_tipo"
                className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
                onChange={handleInputChange}
                required
                defaultValue="casa"
              >
                <option value="casa">Casa</option>
                <option value="trabajo">Trabajo</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Registrarse
          </button>

          {error && (
            <p className="text-red-500 text-center mt-4">
              Las contraseñas no coinciden
            </p>
          )}

          <p className="mt-4 text-center text-[#FFE3DC]">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/signin" className="text-[#DE0D92] hover:underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      ) : (
        <Loader className="h-16 w-16 text-[#DE0D92] mx-auto" />
      )}
    </>
  );
}
export { SignupForm };
