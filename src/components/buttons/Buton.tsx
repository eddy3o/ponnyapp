import React from "react";

interface BotonDetallesProps {
  texto: string;
}

const Buton: React.FC<BotonDetallesProps> = ({ texto }) => {
  return (
    <button >
      {texto}
    </button>
  );
};

export default Buton;
