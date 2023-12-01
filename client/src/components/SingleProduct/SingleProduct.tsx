import { Div } from "./styles.ts";
import ProductSection from "./ProductSection";
import DescriptionSection from "./DescriptionSection";
import OtherProductsSection from "./OtherProductsSection";

function SingleProduct() {
  return (
    <Div>
      <ProductSection />
      <DescriptionSection />
      <OtherProductsSection />
    </Div>
  );
}

export default SingleProduct;
