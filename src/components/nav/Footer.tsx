import { Link } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
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

export default Footer;
