import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import Modal from "../Modal";
import LoginOrSignUp from "../LoginOrSignUp";

import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";
import Cart from "../Cart";
import {
  AppWrapper,
  MainWrapper,
  Wrapper,
} from "../../styled-components/Template.styles.ts";
import { LogInInfo, SignUpInfo } from "../../services/database.ts";

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
        title={isSignUp ? SignUpInfo.title : LogInInfo.title}
        open={isLogOpen}
        onOpenChange={setIsLogOpen}
        element={LoginOrSignUp(isSignUp)}
      />
      <Cart />
    </>
  );
}

export default Template;
