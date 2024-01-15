import CartEmpty from "./CartEmpty";

import { useCartContext } from "../../../providers/UserContext";
import { ICartContext } from "../../../types/cart";
import RenderCartItems from "../../RenderCartItems";
// import CartModalHeader from "./CartModalHeader";

function CartModal() {
  const { cart } = useCartContext() as ICartContext;
  const sortedProducts =
    cart &&
    cart.sort((a, b) => Number(b.product.price) - Number(a.product.price));

  return (
    <>
      {sortedProducts && sortedProducts.length > 0 ? (
        <RenderCartItems />
      ) : (
        <CartEmpty />
      )}

    </>
  );
}

export default CartModal;
