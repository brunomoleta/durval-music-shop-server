import Modal from "../Modal";
import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import CartModal from "./CartModal";
import { WarningInlineButton } from "../../styled-components/Button.styles.ts";

function Cart() {
  const { isCartModalOpen, setIsCartModalOpen, cleanCart, cart } =
    useCartContext() as ICartContext;

  return (
    <Modal
      title="Meu carrinho"
      button={
        cart &&
        cart.length > 0 && (
          <WarningInlineButton onClick={cleanCart}>
            esvaziar carrinho
          </WarningInlineButton>
        )
      }
      open={isCartModalOpen}
      onOpenChange={setIsCartModalOpen}
      element={CartModal()}
    />
  );
}

export default Cart;
