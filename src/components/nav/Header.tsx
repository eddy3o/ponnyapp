import { CreditCard } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-[#000000] border-b border-[#333] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8 text-[#DE0D92]" />
            <Link href="/" className="text-2xl font-light text-[#DE0D92]">
              Pony Pago
            </Link>
          </div>
          <nav className="space-x-4">
            <Link
              href="/signin"
              className="text-[#FFE3DC] hover:text-[#DE0D92] transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
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
      </header>
    </div>
  );
};

export default Header;
