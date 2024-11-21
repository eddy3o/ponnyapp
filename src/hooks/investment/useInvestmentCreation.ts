import { postInvestment } from "@/services";
import { useState } from "react";

export const useInvestmentCreation = () => {
  const [formData, setFormData] = useState({
    tipo_inversion: "",
    monto_invertido: 0,
    fecha_fin: "",
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    console.log(currentDate);
    const investmentData = {
      tipo_inversion: formData.tipo_inversion,
      monto_invertido: formData.monto_invertido,
      fecha_inicio: currentDate,
      fecha_fin: formData.fecha_fin,
      estado: "activa",
    };
    try {
      console.log(investmentData);
      const response = await postInvestment(investmentData);
      console.log(response);
      setModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    modalVisible,
  };
};
