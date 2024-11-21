import React from "react";

const DefaultContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <article className="w-full border-secondary border-4 px-5 py-5 rounded-lg text-xl background-container">
      {children}
    </article>
  );
};

export { DefaultContainer };
