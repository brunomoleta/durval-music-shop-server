import NoProductFound from "../../../NoProductFound";
import NoOrder from "../../../../assets/No-Order.svg";
import Illustration from "../../../Illustration";

// import { Wrapper } from "../../../../styled-components/RenderCartItems.ts";

function CartEmpty() {
  return (
    <NoProductFound
      element={<Illustration image={NoOrder} alt="" />}
      message="Carrinho vazio"
      subTitle="Você não tem nenhum produto no carrinho ainda."
      isButton={true}
    />
  );
}

export default CartEmpty;
