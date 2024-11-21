"use client";

import React, { useState, FormEvent } from "react";
import { Mail, Lock, CreditCard } from "lucide-react";
import Link from "next/link";
import { login } from "@/services";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    if (email.length < 2 || password.length < 2) {
      setError(true);
      return;
    }
    console.log({ identifier: email, password });
    login({ identifier: email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] border border-[#333] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
    >
      <div className="text-center mb-8">
        <CreditCard className="h-16 w-16 text-[#DE0D92] mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-[#DE0D92] mb-2">Pony Pago</h2>
        <p className="text-[#FFE3DC] text-lg">Tu banco digital de confianza</p>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9E1946] h-5 w-5" />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full bg-[#000000] text-[#E7E7E7] border border-[#333] rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#DE0D92] focus:ring-1 focus:ring-[#DE0D92]"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      {error && (
        <p className="text-[#DE0D92] text-sm mb-4">
          Por favor, llena todos los campos.
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        Iniciar sesión
      </button>

      <p className="mt-4 text-center text-[#FFE3DC]">
        ¿Aún no tienes cuenta?{" "}
        <Link href="/signup" className="text-[#DE0D92] hover:underline">
          Regístrate
        </Link>
      </p>
    </form>
  );
}
export { SigninForm };
