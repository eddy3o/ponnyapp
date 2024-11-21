import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignupForm from "@/app/signup/page";

describe("SignupForm Component", () => {
  it("should renders SignupForm component", () => {
    const { getByPlaceholderText } = render(<SignupForm />);
    expect(getByPlaceholderText("Nombre completo")).toBeInTheDocument();
    expect(getByPlaceholderText("Correo electrónico")).toBeInTheDocument();
  });

  it("should allows the user to fill out the form", () => {
    const { getByPlaceholderText } = render(<SignupForm />);
    const nameInput = getByPlaceholderText("Nombre completo");
    const emailInput = getByPlaceholderText("Correo electrónico");
    const passwordInput = getByPlaceholderText("Contraseña");
    const confirmPasswordInput = getByPlaceholderText("Confirmar contraseña");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
    expect(confirmPasswordInput.value).toBe("password123");
  });

  it("should show an error message when passwords do not match", () => {
    const { getByPlaceholderText, getByText } = render(<SignupForm />);
    const nameInput = getByPlaceholderText("Nombre completo");
    const emailInput = getByPlaceholderText("Correo electrónico");
    const passwordInput = getByPlaceholderText("Contraseña");
    const confirmPasswordInput = getByPlaceholderText("Confirmar contraseña");
    const submitButton = getByText("Registrarse");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password456" },
    });
    fireEvent.click(submitButton);

    expect(getByText("Las contraseñas no coinciden")).toBeInTheDocument();
  });
});
