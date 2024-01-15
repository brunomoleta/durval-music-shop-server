import Trash from "../../../assets/trash.svg";
import {
  Brand,
  ImgModalContainer,
  Name,
  PriceModal,
} from "../../../styled-components/CardProduct.styles.ts";
import { colors, fontSize } from "../../../styled-components/root.ts";
import { ICart, ICartContext } from "../../../types/cart";

import ProductAmount from "../ProductAmount";
import { useCartContext, useUserContext } from "../../../providers/UserContext";
import { IUserContext } from "../../../types/user";
import {
  ProductInfo,
  RemoveBtn,
  Warning,
  Wrapper,
} from "../../../styled-components/CartItem.styles.ts";

function CartItem(props: ICart) {
  const { product, amount } = props;
  const { name, brandName, image, price, id } = product;
  const { removeProductInCart } =
    useCartContext() as ICartContext;
  const { priceString } = useUserContext() as IUserContext;

  return (
    <>
      <Wrapper>
        {amount === product.stock && (
          <Warning>{product.stock} é o estoque total ;)</Warning>
        )}
        <ImgModalContainer>
          <img src={image} alt={`${name} image`} />
        </ImgModalContainer>
        <ProductInfo>
          <div>
            <Brand>{brandName}</Brand>
            <Name>{name}</Name>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RemoveBtn
              onClick={() => {
                removeProductInCart(id);
              }}
            >
              <img alt="" src={Trash} />
              <span
                style={{
                  color: colors.red60,
                  fontSize: fontSize.smallLink,
                }}
              >
                remover
              </span>
            </RemoveBtn>
            <ProductAmount product={product} amount={amount} />
            <PriceModal>{priceString(price)}</PriceModal>
          </div>
        </ProductInfo>
      </Wrapper>
    </>
  );
}

export default CartItem;
