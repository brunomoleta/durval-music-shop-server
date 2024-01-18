import { CardProd, ProductGrid } from "../../styled-components/Cards.styles.ts";
import { fontSize } from "../../styled-components/root.ts";
import Cart from "../../assets/Cart.svg";
import { ProfileIcon } from "../../styled-components/Header.styles.tsx";
import { AddCartButton } from "../../styled-components/Button.styles.ts";
import { useCartContext, useProductContext } from "../../providers/UserContext";
import {
  CardProductProps,
  IFullProductContext,
  IProductContext,
} from "../../types/product";
import {
  Brand,
  ImageContainer,
  Name,
  Price,
  ProductButton,
} from "../../styled-components/CardProduct.styles.ts";
import { ICartContext } from "../../types/cart";
import { capitalizedString, priceString } from "../../services/utils.ts";

function CardProduct(props: CardProductProps) {
  const { addProductInCart } = useCartContext() as ICartContext;
  const { getProductById, setSingleProduct } =
    useProductContext() as IFullProductContext;

  const { item } = props;
  const { image, brandName, name, price } = item;

  return (
    <CardProd>
      <ProductButton
        to={`/products/${item.id}`}
        onClick={async () => {
          try {
            const product: IProductContext = await getProductById(item.id);

            setSingleProduct(product);
            window.scrollTo(0, 0);
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        }}
      >
        <ProductGrid>
          <ImageContainer>
            <img src={image} alt={`${name}`} title={name} />
          </ImageContainer>
          <div>
            <Brand>{capitalizedString(brandName)}</Brand>
            <div style={{ display: "grid", gridTemplateRows: "90px auto" }}>
              <Name>{name}</Name>
            </div>
          </div>
          <Price>{priceString(price)}</Price>
        </ProductGrid>
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
