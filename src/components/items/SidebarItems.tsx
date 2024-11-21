import React from "react";
import Link from "next/link";
import { logout } from "@/services";
import {
  Banknote,
  DollarSign,
  HandCoins,
  HomeIcon,
  LogOut,
  PhoneCall,
  PiggyBank,
  User,
} from "lucide-react";

const liStyles =
  "flex items-center gap-5 text-xl font-bold text-white hover:text-[#DE0D92] cursor-pointer transition-colors duration-100";

const SidebarItems = () => {
  return (
    <ul className="text-xl font-bold flex flex-col gap-5">
      <li className={liStyles}>
        <HomeIcon />
        <Link href={"/web/home"}>Página principal</Link>
      </li>
      <li className={liStyles}>
        <DollarSign />
        <Link href={"/web/transfer"}>Transferencias</Link>
      </li>
      <li className={liStyles}>
        <PhoneCall />
        <Link href={"/web/recharge"}>Recargas</Link>
      </li>
      <li className={liStyles}>
        <HandCoins />
        <Link href={"/web/investment"}>Inversiones</Link>
      </li>
      <li className={liStyles}>
        <Banknote />
        <Link href={"/web/services"}>Pago de servicios</Link>
      </li>
      {/* <li className={liStyles}>
        <Settings2 />
        <Link href={"/web/configuration"}>Configuración</Link>
      </li> */}
      <li className={liStyles}>
        <PiggyBank />
        <Link href={"/web/loan"}>Préstamo</Link>
      </li>
      <li className={liStyles}>
        <User />
        <Link href={"/web/profile"}>Perfil</Link>
      </li>
      <li className={liStyles}>
        <LogOut />
        <a onClick={logout}>Cerrar Sesión</a>
      </li>
    </ul>
  );
};

export { SidebarItems };
