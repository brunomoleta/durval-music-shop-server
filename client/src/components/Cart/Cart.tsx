import Modal from "../Modal";
import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import CartModal from "./CartModal";

function Cart() {
  const { isCartModalOpen, setIsCartModalOpen } =
    useCartContext() as ICartContext;
  return (
    <Modal
      open={isCartModalOpen}
      onOpenChange={setIsCartModalOpen}
      element={CartModal()}
    />
  );
}

export default Cart;
