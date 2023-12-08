import { useCartContext } from "../../../../../providers/UserContext";
import { ICartContext } from "../../../../../types/cart";
import React from "react";
import { Wrapper } from "../../../../../styled-components/FloatingText.style.ts";

function FloatingText() {
  const { cart } = useCartContext() as ICartContext;
  const [prevLength, setPrevLength] = React.useState(cart ? cart.length : 0);

  React.useEffect(() => {
    setTimeout(
      () => (cart ? setPrevLength(cart.length) : setPrevLength(0)),
      10,
    );
  }, [cart]);
  return (
    <Wrapper $isBigger={cart && prevLength >= cart.length} key={prevLength}>
      {cart && prevLength > cart.length ? "-" : "+"}1
    </Wrapper>
  );
}

export default FloatingText;
