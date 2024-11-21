import { postTransferencia } from "@/services";
import { ChangeEvent, FormEvent, useState } from "react";

export const useTransferencia = () => {
  const [formData, setFormData] = useState({
    cuenta_destino: "",
    monto: 0,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postTransferencia(formData);
      console.log(res);
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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    formData,
    modalVisible,
    setModalVisible,
    loading,
    error,
  };
};
