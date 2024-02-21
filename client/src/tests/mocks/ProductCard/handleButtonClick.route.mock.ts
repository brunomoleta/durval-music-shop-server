export const handleButtonClick = jest.fn();

export const useCartContextMock = jest.fn(() => ({
  useCartContext: () => ({
    addProductInCart: handleButtonClick,
  }),
}));

jest.mock("../../../providers/UserContext", () => useCartContextMock);