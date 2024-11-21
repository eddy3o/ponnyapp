import { register } from "@/services";
import { useState, FormEvent } from "react";

const useSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    telefono: "",
    telefono_tipo: "celular",
    direccion: "",
    direccion_tipo: "casa",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (
      formData.password !== formData.password_confirmation ||
      formData.password === ""
    ) {
      setError(true);
      return;
    }
    const registerData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
      telefono: {
        numero: formData.telefono,
        tipo: formData.telefono_tipo,
      },
      direccion: {
        direccion: formData.direccion,
        tipo: formData.direccion_tipo,
      },
      cuenta: {
        tipo_cuenta: "debito",
        saldo: 0,
      },
    };
    try {
      console.log(registerData);
      const response = await register(registerData);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleInputChange,
    handleSubmit,
    error,
    loading,
  };
};

export { useSignup };
