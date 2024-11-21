import { useEffect, useState } from "react";
import { getUserInfo, getUserSaldo } from "@/services";

export const useDashboard = () => {
  const [nombre, setNombre] = useState<string>("");
  const [saldo, setSaldo] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getUserInfo();
      setNombre(res.nombre);
      const saldoRes = await getUserSaldo();
      setSaldo(saldoRes.saldo);
    } catch (error) {
      if (error instanceof Error) {
        setError({
          status: true,
          message: error.message,
        });
      } else {
        setError({
          status: true,
          message: "An unknown error occurred",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    nombre,
    saldo,
    loading,
    error,
  };
};
