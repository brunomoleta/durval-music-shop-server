import { SendBtn } from "../../styled-components/Button.styles.ts";
import { CardSubTitle, H1 } from "../../styled-components/Typography.styles.ts";
import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import { Link } from "react-router-dom";
import React from "react";
import { NoProductFoundProps } from "../../types/types";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 24px;
  text-align: center;
`;
const NoProductFound: React.FC<NoProductFoundProps> = ({
  message,
  subTitle,
  isButton,
  element,
}) => {
  const { isCartModalOpen, setIsCartModalOpen } =
    useCartContext() as ICartContext;
  return (
    <Wrapper>
      {element}
      <H1>{message}</H1>
      <CardSubTitle>{subTitle}</CardSubTitle>
      {isButton ? (
        <SendBtn onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
          Ir às compras :)
        </SendBtn>
      ) : (
        <Link to={"/"}>Voltar a página inicial</Link>
      )}
    </Wrapper>
  );
};

export default NoProductFound;
