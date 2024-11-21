import React from "react";
import { SidebarItems } from "@/components";

const DesktopSidebar = () => {
  return (
    <nav className="top-0 left-0 z-50 w-[290px] h-screen bg-black border-r-secondary hidden lg:block">
      <section className="m-5">
        <div className="my-2 flex flex-col">
          <span className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#DE0D92] to-[#9E1946] mb-3">
            Pony Pago
          </span>
          <hr className="h-px background-container-secondary mb-6 border-0" />
          <SidebarItems />
        </div>
      </section>
    </nav>
  );
};

export { DesktopSidebar };
