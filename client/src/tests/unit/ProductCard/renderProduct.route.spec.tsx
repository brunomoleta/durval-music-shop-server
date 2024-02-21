import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import {product} from "../../mocks/ProductCard/renderProduct.route.mock.ts";
import CardProduct from "../../../components/CardProduct";
import {UserProvider} from "../../../providers/UserContext";
import {BrowserRouter} from "react-router-dom";
import {capitalizedFirstLetter} from "../../../services/utils.ts";


const guitar = product.guitar;
describe("RenderProductCard", () => {
    render(
        <BrowserRouter>
            <UserProvider>
                <CardProduct item={guitar}/>
            </UserProvider>
        </BrowserRouter>,
    );
    const addToCartButton = screen.getByRole("button", {
        name: /CARRINHO+/i,
    });

    test("Should render product card, including info and image and button", async () => {
        expect(screen.getByText(guitar.name).textContent).toStrictEqual(
            "Fender Stratocaster sunburst",
        );
        expect(
            screen.getByText(capitalizedFirstLetter(guitar.brandName)).textContent,
        ).toStrictEqual("Fender");
        expect(screen.getByAltText(guitar.name)).toBeInTheDocument();
        expect(screen.getByText("R$ 7.000,00")).toBeInTheDocument();
        expect(addToCartButton).toBeInTheDocument()
    });

});
