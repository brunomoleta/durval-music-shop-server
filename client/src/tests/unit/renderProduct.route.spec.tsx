import { render, screen } from "@testing-library/react";

import { product } from "../mocks/create/renderProduct.route.mock.ts";
import CardProduct from "../../components/CardProduct";
import { UserProvider } from "../../providers/UserContext";
import { BrowserRouter } from "react-router-dom";

describe("ProductCard", () => {
  test("Should render product card", () => {
    const guitar = product.guitar;

    render(
      <BrowserRouter>
        <UserProvider>
          <CardProduct item={guitar} />
        </UserProvider>
      </BrowserRouter>,
    );
    expect(screen.getByText(guitar.name).textContent).toBe(
      "Fender Stratocaster sunburst",
    );
  });
});
