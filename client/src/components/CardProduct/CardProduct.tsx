import { CardProd } from "../../styled-components/Cards.styles.ts";
import { fontSize } from "../../styled-components/root.ts";
import Cart from "../../assets/Cart.svg";
import { ProfileIcon } from "../../styled-components/Header.styles.tsx";
import { AddCartButton } from "../../styled-components/Button.styles.ts";
import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import { CardProductProps } from "../../types/product";
import ProductButton from "./ProductButton";
import ProductInfo from "./ProductInfo";

function CardProduct(props: CardProductProps) {
  const { addProductInCart } = useCartContext() as ICartContext;

  const { item } = props;
  return (
    <CardProd>
      <ProductButton
          item={item}>
        <ProductInfo item={item} />
      </ProductButton>

      <AddCartButton
        onClick={() => {
          addProductInCart(item);
        }}
      >
        <ProfileIcon src={Cart} alt="Carrinho" />
        <span style={{ fontSize: fontSize.icons }}>CARRINHO+</span>
      </AddCartButton>
    </CardProd>
  );
}

export default CardProduct;
