import {
  CardProductProps,
} from "../../../types/product";
import { ProductGrid } from "../../../styled-components/Cards.styles.ts";
import {
  Brand,
  ImageContainer,
  Name,
  Price,
} from "../../../styled-components/CardProduct.styles.ts";
import { capitalizedString, priceString } from "../../../services/utils.ts";

function ProductInfo(props: CardProductProps) {
  const { item } = props;
  const { image, brandName, name, price } = item;
  return (
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
  );
}

export default ProductInfo;
