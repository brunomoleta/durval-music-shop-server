import { CardProductProps, IFullProductContext } from "../../../types/product";
import { useProductContext } from "../../../providers/UserContext";
import { ProductCardButton } from "../../../styled-components/CardProduct.styles.ts";

function ProductButton(props: CardProductProps) {
  const { item, children } = props;
  const { getSingleProduct } = useProductContext() as IFullProductContext;

  return (
    <ProductCardButton
      to={`/products/${item.id}`}
      onClick={() => getSingleProduct(item.id)}
    >
      {children}
    </ProductCardButton>
  );
}

export default ProductButton;
