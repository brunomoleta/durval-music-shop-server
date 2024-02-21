import styled from "styled-components";
import {H3} from "./Typography.styles.ts";
import {fontSize} from "./root.ts";
import {QUERIES} from "../services/database.ts";

export const Buttons = styled.div`
  display: grid;
  gap: 24px;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;
export const FinalPrice = styled(H3)`
  font-size: ${fontSize.link};
  font-weight: 600;
`;
export const Wrapper = styled.div`
  display: grid;
  gap: clamp(1svh, 3svh, 16px);
  grid-template-rows: auto auto;
  height: 85svh;
  
`;

export const BottonInfo = styled.div`
  margin-block-start: 32px;
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

export const CartOl = styled.ol`
  margin-block: 16px;
  overflow-y: auto;
  padding-inline-end: clamp(8px, 5%, 32px);
  height: 100%;
  margin-block-start: 40px;
  @media ${QUERIES.tabletAndUp} {
    max-height: 450px;

    margin-block: 0;
  }
`;
