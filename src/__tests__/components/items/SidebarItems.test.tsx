import React from "react";
import { render, screen } from "@testing-library/react";
import { SidebarItems } from "@/components";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SidebarItems", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("renders the sidebar items correctly", () => {
    render(<SidebarItems />);

    expect(screen.getByText("Página principal")).toBeInTheDocument();
    expect(screen.getByText("Perfil")).toBeInTheDocument();
    expect(screen.getByText("Transferencias")).toBeInTheDocument();
    expect(screen.getByText("Recargas")).toBeInTheDocument();
    expect(screen.getByText("Pago de servicios")).toBeInTheDocument();
    expect(screen.getByText("Configuración")).toBeInTheDocument();
    expect(screen.getByText("Cerrar Sesión")).toBeInTheDocument();
  });

  it("has correct links for each item", () => {
    render(<SidebarItems />);

    expect(screen.getByText("Página principal").closest("a")).toHaveAttribute(
      "href",
      "/web/home"
    );
    expect(screen.getByText("Perfil").closest("a")).toHaveAttribute(
      "href",
      "/web/profile"
    );
    expect(screen.getByText("Transferencias").closest("a")).toHaveAttribute(
      "href",
      "/web/transfer"
    );
    expect(screen.getByText("Recargas").closest("a")).toHaveAttribute(
      "href",
      "/web/recharge"
    );
    expect(screen.getByText("Pago de servicios").closest("a")).toHaveAttribute(
      "href",
      "/web/services"
    );
    expect(screen.getByText("Configuración").closest("a")).toHaveAttribute(
      "href",
      "/web/configuration"
    );
    expect(screen.getByText("Cerrar Sesión").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("applies correct styles to each item", () => {
    render(<SidebarItems />);

    const items = screen.getAllByRole("listitem");
    items.forEach((item) => {
      expect(item).toHaveClass(
        "flex items-center gap-5 text-xl font-bold text-white hover:text-[#DE0D92] cursor-pointer"
      );
    });
  });
});
