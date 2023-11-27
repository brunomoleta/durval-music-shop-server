import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";

export const SectionDescription = styled.section`
  margin: 0 10px 0 10px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  // width: 100%;

  @media (min-width: 800px) {
    margin-left: 55px;
  }
`;
export const H3TitleDescription = styled.h3`
  color: ${colors.black};
  font-size: ${fontSize.h2h3};
  font-weight: 700;
  margin-bottom: 25px;
`;

export const ParagDescription = styled.p`
  color: ${colors.black};
  font-size: ${fontSize.text};
  line-height: 25px;
  width: 100%;
  // text-align: justify;

  @media (min-width: 800px) {
    min-width: 1250px;
  }
`;
