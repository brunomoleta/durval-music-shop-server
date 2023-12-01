import Header from "./Header";
import React from "react";
import {
  colors,
  fontType,
  genericValues,
} from "../../styled-components/root.ts";
import styled from "styled-components";
import Footer from "./Footer";
import Modal from "../Modal";
import LoginOrSignUp from "../LoginOrSignUp";

import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";
import Cart from "../Cart";

const AppWrapper = styled.div`
  font-family: ${fontType.primary};
  color: ${colors.black}
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const MainWrapper = styled.main`
  display: grid;
  place-items: center;
  margin-block: 64px;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: grid;
  place-items: center;
`;

function Template(props: { children: React.ReactNode }) {
  const { isLogOpen, setIsLogOpen, isSignUp } =
    useUserContext() as IUserContext;

  return (
    <>
      <AppWrapper>
        <Header />
        <MainWrapper>
          <Wrapper>{props.children}</Wrapper>
        </MainWrapper>
        <Footer />
      </AppWrapper>

      <Modal
        open={isLogOpen}
        onOpenChange={setIsLogOpen}
        element={LoginOrSignUp(isSignUp)}
      />
      <Cart />
    </>
  );
}

export default Template;
