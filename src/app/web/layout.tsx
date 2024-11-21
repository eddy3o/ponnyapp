"use client";
import { DesktopSidebar, Navbar, Sidebar } from "@/components";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { checkToken } from "@/services";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex min-h-screen flex-col sm:h-auto sm:flex-row">
        <DesktopSidebar />
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { filter: "blur(5px)" },
            closed: { filter: "blur(0px)" },
          }}
          transition={{ type: "tween", duration: 0.5 }}
          className="flex flex-col w-full flex-1"
        >
          {children}
          <Navbar />
        </motion.div>
      </div>
    </>
  );
}
