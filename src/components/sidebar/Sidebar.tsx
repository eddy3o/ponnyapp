"use client";

import { Hamburger, Profile } from "@/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SidebarItems } from "@/components";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      <div
        ref={sidebarRef}
        className="block lg:hidden sticky z-50 top-0 px-9 py-4 shadow-xl background-container border-b-secondary"
      >
        <div className="flex justify-between">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <Hamburger size={"small"} color={"primary"} fill={"primary"} />
          </button>
          <Link href={"/web/profile"}>
            <Profile size={"small"} color={"primary"} fill={"primary"} />
          </Link>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: "tween", duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100,
            width: "290px",
            height: "100vh",
            backgroundColor: "#000000",
            borderRight: "var(--border-secondary)",
          }}
        >
          <section className="m-5">
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <Hamburger size={"small"} color={"primary"} fill={"primary"} />
            </button>
            <div className="my-2 flex flex-col">
              <span className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946] mb-3">
                Pony Pago
              </span>
              <hr className="h-px background-container-secondary p-0 mb-6 border-0" />
              <SidebarItems />
            </div>
          </section>
        </motion.nav>
      </div>
    </>
  );
};

export { Sidebar };
