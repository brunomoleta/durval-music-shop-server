import { useCartContext } from "../../../../../providers/UserContext";
import { ICartContext } from "../../../../../types/cart";
import { Wrapper } from "../../../../../styled-components/FloatingText.style.ts";

function FloatingText() {
  const { cart, prevCounter } = useCartContext() as ICartContext;


  return (
    <Wrapper $isBigger={cart && prevCounter <= cart.length} key={cart?.length}>
      {cart && prevCounter < cart.length ? "+" : "-"}1
    </Wrapper>
  );
}

export default FloatingText;
