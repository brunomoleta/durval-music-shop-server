import {
  DDescription,
  DTitle,
} from "../../../../styled-components/Modal.styles.js";
import { fontSize } from "../../../../styled-components/root.js";
import { WarningInlineButton } from "../../../../styled-components/Button.styles.js";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {useCartContext} from "../../../../providers/UserContext";
import {ICartContext} from "../../../../types/cart";

function CartModalHeader() {
  const { cleanCart, isCartModalOpen, cart } = useCartContext() as ICartContext;
  return (
    <>
      <DTitle
        style={{
          position: "relative",
          textAlign: "left",
          fontSize: fontSize.h3,
        }}
      >
        Meu carrinho
        {isCartModalOpen && (
          <WarningInlineButton onClick={cleanCart}>
            esvaziar carrinho
          </WarningInlineButton>
        )}
      </DTitle>
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
