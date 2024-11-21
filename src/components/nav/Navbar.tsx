import { Card, Pig } from "@/icons";
import { Home } from "@/icons/home";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky bottom-0 w-full mt-auto flex lg:hidden justify-between px-16 py-4 background-container border-t-secondary z-10">
      <Link href="/web/home">
        <Home size={"small"} color={"primary"} fill={"primary"} />
      </Link>
      <Link href="/web/recharge">
        <Card size={"small"} color={"primary"} fill={"primary"} />
      </Link>
      <Link href="/web/services">
        <Pig size={"small"} color={"primary"} fill={"primary"} />
      </Link>
    </div>
  );
};

export { Navbar };
