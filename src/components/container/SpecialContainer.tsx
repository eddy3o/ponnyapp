import React from "react";

const SpecialContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col p-5 bg-pink-500 rounded-xl bg-gradient-to-r from-[#DE0D92] to-[#9E1946]">
      {children}
    </div>
  );
};

export { SpecialContainer };
