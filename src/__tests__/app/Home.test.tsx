import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home, landing page", () => {
  beforeEach(() => {});

  it("should render the Home page", () => {
    render(<Home />);
    expect(screen.getByText("Pony Pago")).toBeInTheDocument();
  });

  it("is well routed", () => {
    render(<Home />);
    expect(screen.getByText("Iniciar Sesión")).toHaveAttribute(
      "href",
      "/signin"
    );
    expect(screen.getByText("Registrarse")).toHaveAttribute("href", "/signup");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(() => {});
});
