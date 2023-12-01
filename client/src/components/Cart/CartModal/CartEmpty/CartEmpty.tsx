import NoOrder from "../../../../assets/wishlist.svg";
import {useCartContext} from "../../../../providers/UserContext";
import {ICartContext} from "../../../../types/cart";
import {CardSubTitle, H1} from "../../../../styled-components/Typography.styles.ts";
import {ImageNotFound} from "../../../../styled-components/NotFound.styles.ts";
import {SendBtn} from "../../../../styled-components/Button.styles.ts";

function CartEmpty() {
  const { isCartModalOpen, setIsCartModalOpen } =
    useCartContext() as ICartContext;
  return (
    <>
      <ImageNotFound src={NoOrder} alt="url not found" />
      <H1>Carrinho vazio</H1>
      <CardSubTitle>
        Você não tem nenhum produto no carrinho ainda.
      </CardSubTitle>
      <SendBtn onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
        Ir às compras :)
      </SendBtn>
    </>
  );
}

export default CartEmpty;
