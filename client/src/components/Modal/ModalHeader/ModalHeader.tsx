import { DTitle } from "../../../styled-components/Modal.styles.tsx";
import React from "react";
import CloseModalButton from "../../Button/CloseModalButton";
import styled from "styled-components";

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, button }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <DTitle>{title}</DTitle>

        {button}
      </TitleWrapper>
      <CloseModalButton />
    </Wrapper>
  );
};

export default ModalHeader;

interface ModalHeaderProps {
  title: string;
  button?: React.ReactNode;
}

const TitleWrapper = styled.div`
    display: flex;
    position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
