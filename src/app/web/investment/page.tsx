"use client";
import { DefaultContainer } from "@/components";
import InversionesItems from "@/components/items/InversionesItems";
import { getInvestments } from "@/services";
import { Inversion } from "@/services/types";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const InvestmentPage = () => {
  const [inversiones, setInversiones] = useState<Inversion[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getInvestments();
      if (res.inversiones && Array.isArray(res.inversiones)) {
        setInversiones(res.inversiones);
      } else {
        setInversiones([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <main className="px-10 py-3">
        <section className="mt-4 flex flex-col gap-4">
          <DefaultContainer>
            <div className="flex flex-col gap-6">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE0D92] to-[#9E1946] text-2xl font-semibold">
                  Inversiones en proceso
                </h1>
                <Link
                  className="bg-gradient-to-r from-[#9E1946] to-[#DE0D92] text-[#E7E7E7] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                  href={"/web/investment/create"}
                >
                  Nueva Inversión
                </Link>
              </div>
              {!loading ? (
                <>
                  {inversiones?.map((inversion: Inversion) => (
                    <InversionesItems
                      key={inversion.id}
                      inversion={inversion}
                    />
                  ))}
                </>
              ) : (
                <Loader />
              )}
            </div>
          </DefaultContainer>
        </section>
      </main>
    </div>
  );
};

export default InvestmentPage;
