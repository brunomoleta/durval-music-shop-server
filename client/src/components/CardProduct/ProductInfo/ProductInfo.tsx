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
import { capitalizedFirstLetter, priceToString } from "../../../services/utils.ts";

function ProductInfo(props: CardProductProps) {
  const { item } = props;
  const { image, brandName, name, price } = item;
  return (

    <ProductGrid>
      <ImageContainer>
        <img src={image} alt={`${name}`} title={name} />
      </ImageContainer>
      <div>
        <Brand>{capitalizedFirstLetter(brandName)}</Brand>
        <div style={{ display: "grid", gridTemplateRows: "90px auto" }}>
          <Name>{name}</Name>
        </div>
      </div>
      <Price>{priceToString(price)}</Price>
    </ProductGrid>
  );
}

export default ProductInfo;
