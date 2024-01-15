import { DDescription } from "../../../../styled-components/Modal.styles.js";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useCartContext } from "../../../../providers/UserContext";
import { ICartContext } from "../../../../types/cart";

function CartModalHeader() {
  const { cart } = useCartContext() as ICartContext;

  return (
    <>
      <DDescription>
        {cart && cart.length < 0 ? (
          "Seu carrinho está vazio por enquanto"
        ) : (
          <VisuallyHidden.Root>
            Edite os itens de seu carrinho
          </VisuallyHidden.Root>
        )}
      </DDescription>
    </>
  );
}

export default CartModalHeader;
