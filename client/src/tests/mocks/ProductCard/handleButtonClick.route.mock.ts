export const handleButtonClick = jest.fn();

export const tryAddProductAtCart = jest.mock("../../providers/UserContext", () => ({
  useCartContext: () => ({
    addProductInCart: handleButtonClick }),
}));
