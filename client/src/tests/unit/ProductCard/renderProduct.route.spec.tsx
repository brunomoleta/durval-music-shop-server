import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { product } from "../../mocks/ProductCard/renderProduct.route.mock.ts";
import CardProduct from "../../../components/CardProduct";
import { UserProvider } from "../../../providers/UserContext";
import { BrowserRouter } from "react-router-dom";
import {capitalizedString} from "../../../services/utils.ts";
// import {
//   // handleButtonClick,
//   tryAddProductAtCart,
// } from "../../mocks/ProductCard/handleButtonClick.route.mock.ts";

// jest.mock("../../../providers/UserContext", () => tryAddProductAtCart);

const guitar = product.guitar;
describe("RenderProductCard", () => {
  render(
    <BrowserRouter>
      <UserProvider>
        <CardProduct item={guitar} />
      </UserProvider>
    </BrowserRouter>,
  );

  test("Should render product card, including info, image and button", async () => {
    expect(screen.getByText(guitar.name).textContent).toStrictEqual(
      "Fender Stratocaster sunburst",
    );
    expect(screen.getByText(capitalizedString(guitar.brandName)).textContent).toStrictEqual(
      "Fender",
    );
    expect(screen.getByAltText(guitar.name)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /CARRINHO+/,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("R$ 7.000,00")).toBeInTheDocument();
  });

  // describe("Trigger addProductInCart", () => {
  //   test("Should trigger addProductInCart function when the button is clicked", () => {
  //     fireEvent.click(screen.getByText("CARRINHO+"));
  //     expect(handleButtonClick).toHaveBeenCalledWith(guitar);
  //   });
  // });
});
