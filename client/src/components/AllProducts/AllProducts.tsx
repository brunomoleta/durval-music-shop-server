import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { useProductContext, useUserContext } from "../../providers/UserContext";
import { IFullProductContext, IProductContext } from "../../types/product";
import { ProductCards } from "../../styled-components/Cards.styles.ts";
import CardProduct from "../CardProduct";
import React, { useState } from "react";
import { IUserContext } from "../../types/user";
import Loader from "../Loader";
import {Heading, Wrapper} from "../../styled-components/AllProducts.styles.ts";
import {RoundButton} from "../../styled-components/Button.styles.ts";


type IAllProducts = {
  heading: string;
};

function AllProducts(props: IAllProducts) {
  const [page, setPage] = useState(1);
  const { getAllProducts, allProducts, productsPage } =
    useProductContext() as IFullProductContext;

  const { isLoading } = useUserContext() as IUserContext;

  React.useEffect((): void => {
    getAllProducts(page, 4);
  }, [page]);

  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <ProductCards>
        {isLoading ? (
          <Loader />
        ) : (
          allProducts &&
          allProducts.map((item: IProductContext) => (
            <CardProduct key={item.id} item={item} />
          ))
        )}
      </ProductCards>
      {page > 1 && (
        <RoundButton
          $positionLeft={true}
          onClick={() => setPage((page) => page - 1)}
        >
          <img src={ArrowLeft} alt="productos anteriores" />
        </RoundButton>
      )}
      {productsPage.nextPage && (
        <RoundButton onClick={() => setPage((page) => page + 1)}>
          <img src={ArrowRight} alt="próximos productos" />
        </RoundButton>
      )}
    </Wrapper>
  );
}

export default AllProducts;
