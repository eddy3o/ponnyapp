import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Signin from "@/app/signin/page";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Signin Component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it("should renders Signin component", () => {
    render(<Signin />);
    expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
  });

  it("should allows the user to fill out the form", () => {
    render(<Signin />);
    const emailInput = screen.getByPlaceholderText(
      "Correo electrónico"
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      "Contraseña"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("should show an error message when form is submitted with empty fields", () => {
    render(<Signin />);
    const emailInput = screen.getByPlaceholderText("Correo electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");

    fireEvent.change(emailInput, { target: { value: "1@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "a" } });
    const submitButton = screen.getByText("Iniciar sesión");

    fireEvent.click(submitButton);

    expect(
      screen.getByText("Por favor, llena todos los campos.")
    ).toBeInTheDocument();
  });

  /* it("shows error message when credentials are incorrect", async () => {
    render(<Signin />);
    const emailInput = screen.getByPlaceholderText("Correo electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const submitButton = screen.getByText("Iniciar sesión");

    fireEvent.change(emailInput, { target: { value: "wrong@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(
        "Credenciales incorrectas. Por favor, intenta de nuevo."
      )
    ).toBeInTheDocument();
  }); */

  /* it("redirects to dashboard on successful login", async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<Signin />);
    const emailInput = screen.getByPlaceholderText("Correo electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const submitButton = screen.getByText("Iniciar sesión");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("Usuario autenticado con éxito")
    ).toBeInTheDocument();
    expect(push).toHaveBeenCalledWith("/dashboard");
  }); */

  afterEach(() => {
    jest.clearAllMocks();
  });
});
