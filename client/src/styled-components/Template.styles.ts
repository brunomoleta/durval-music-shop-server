import styled from "styled-components";
import {colors, fontType, genericValues} from "./root.ts";

export const AppWrapper = styled.div`
  font-family: ${fontType.primary};
  color: ${colors.black}
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
export const MainWrapper = styled.main`
  display: grid;
  place-items: center;
  margin-block: 64px;
  width: 100%;
  max-width: 100svw;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: grid;
  place-items: center;
`;
