import styled from "styled-components";
import {colors, fontSize} from "./root.ts";
import {QUERIES} from "../services/database.ts";

export const ProductInfo = styled.div`
  display: grid;
  align-content: center;
  gap: 32px;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  max-height: 200px;
  grid-template-columns: 120px auto;
  gap: 32px;
  padding-block: 20px;

  border-bottom: 2px solid ${colors.purple};
  opacity: 0.99;
  position: relative;

  @media (max-width: 550px) {
    display: flex;
    flex-flow: column;
    justify-items: center;
    max-height: none;
    height: auto;
  }
`;
export const Warning = styled.p`
  position: absolute;
  font-size: ${fontSize.smallLink};
  left: 0;
  color: ${colors.purpleBorder};
  bottom: 2px;
  @media ${QUERIES.tabletAndUp} {
    left: unset;
    right: 0;
  }
`;

export const RemoveBtn = styled.button`
  display: grid;
  justify-items: center;

  &:hover {
    outline: 2px solid ${colors.red40};
  }
`;
