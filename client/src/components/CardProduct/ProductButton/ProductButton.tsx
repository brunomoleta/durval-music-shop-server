import {
  CardProductProps,
  IFullProductContext,
  IProductContext,
} from "../../../types/product";
import { useProductContext } from "../../../providers/UserContext";
import { ProductCardButton } from "../../../styled-components/CardProduct.styles.ts";

function ProductButton(props: CardProductProps, children: React.ReactNode) {
  const { item } = props;
  const { getProductById, setSingleProduct } =
    useProductContext() as IFullProductContext;

  return (
    <ProductCardButton
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
      {children}
    </ProductCardButton>
  );
}

export default ProductButton;
