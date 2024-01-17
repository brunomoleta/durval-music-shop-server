import { render, screen } from "@testing-library/react";

import { product } from "../mocks/create/renderProduct.route.mock.ts";
import CardProduct from "../../components/CardProduct";
import { UserProvider } from "../../providers/UserContext";
import { BrowserRouter } from "react-router-dom";
import {priceString} from "../../services/utils.ts";

describe("ProductCard", () => {

  test("Should render product card name, price and brand", () => {
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

    expect(screen.getByText(priceString(guitar.price)).textContent).toBe(
      priceString(7000),
    );
    expect(screen.getByText(guitar.brandName).textContent).toBe("fender");
  });
});
