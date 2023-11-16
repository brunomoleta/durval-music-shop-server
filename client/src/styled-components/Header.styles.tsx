import styled from "styled-components";
import { colors, fontSize } from "./root.ts";
import { DefaultLabel } from "./Modal.styles.tsx";
import { Link } from "react-router-dom";

export const SearchBar = styled.input`
  border: 2px solid ${colors.black};
  border-radius: 4px;
  font-size: ${fontSize.link};
  padding-block: 0.2rem;
  padding-inline-start: 40px;
  margin-block-start: 8px;
  &:focus{
    border: 2px solid ${colors.purpleSurface};
    outline: 2px solid ${colors.purple}
  }
`;

export const LogoTop = styled.img`
  margin: auto;
  margin-block-end: 24px;
`;
export const ProfileIcon = styled.img<{ $bgColor?: boolean }>`
  background-color: ${(props) => props.$bgColor && colors.grey};
  padding: 16px;
  border-radius: 20px;
  &:hover {
    border: 2px solid ${colors.purpleHover}
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export const Category = styled.li`
  padding-block: 4px;
  font-weight: 500;

  &:hover > * {
    color: ${colors.purpleHover};
  }

  z-index: 1;
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding-inline: 64px;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-block-start: 24px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
  hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
export const HeaderWrapper = styled.div`
  max-width: 1440px;
width: 100%;
`
export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;
export const CategoriesWrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Label = styled(DefaultLabel)`
  position: absolute;
  top: -24px;
`;
export const CartQuantity = styled.span`
  position: absolute;
  top: -16px;
  right: -10px;
  background-color: ${colors.purple};
  color: ${colors.offWhite};
  border-radius: 100%;
  padding: 8px;
  font-size: ${fontSize.icons};
`;
export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
`;