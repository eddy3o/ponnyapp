import React from "react";
import * as motion from "framer-motion/client";

const NewContainer = ({
  children,
  onClick, // Añadimos onClick como prop
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void; // Agregamos el tipo de onClick como función opcional
}>) => {
  return (
    <article
      className="w-full border-secondary border-4 px-5 py-5 rounded-lg text-xl background-container mt-4"
      onClick={onClick} // Pasamos onClick al contenedor principal
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        className="flex items-center"
      >
        {children}
      </motion.div>
    </article>
  );
};

export { NewContainer };
