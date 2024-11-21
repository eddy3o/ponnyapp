import React from "react";
import { Dashboard } from "@/components";

const Home = () => {
  return (
    <main className="px-10 py-3">
      <section className="mt-4 flex flex-col gap-4">
        <Dashboard />
      </section>
    </main>
  );
};

export default Home;
