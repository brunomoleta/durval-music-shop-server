import styled from "styled-components";
import { colors, fontSize, fontType, genericValues } from "./root.ts";
import { DefaultLabel } from "./Modal.styles.tsx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { QUERIES } from "../services/database.ts";

export const SearchBar = styled.input`
  border: 2px solid ${colors.black};
  border-radius: 8px;
  font-size: ${fontSize.link};
  padding-block: 0.3rem;
  padding-inline-start: 1.125rem;
  width: 100%;

  &:focus {
    border: 2px solid ${colors.purpleSurface};
    outline: 2px solid ${colors.purple};
  }

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 5.5rem;
  }
`;

export const LogoTop = styled.span`
  font-family: ${fontType.featured};
  margin: auto;
  width: 100%;
  height: auto;

  line-height: 110%;

  font-size: clamp(${fontSize.text}, 10svw, ${fontSize.h2});
  font-weight: 700;

  text-align: center;

  align-self: center;
  justify-self: center;

  transition: color 300ms;

  &:hover {
    color: ${colors.purpleHover};
  }

  &:active {
    color: ${colors.purpleActive};
  }

  &:focus {
    color: ${colors.purpleHover};
  }
`;
export const ProfileIcon = styled.img<{ $bgColor?: boolean }>``;

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
    flex-wrap: wrap;
    
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    @media ${QUERIES.tabletAndUp}) {
        grid-template-columns: revert;
        margin-inline: 0px;
}
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
  min-width: 0;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
export const HeaderWrapper = styled.div`
    max-width: ${genericValues.pageWidth};
    width: 100%;
    margin-block-end: 24px;
    margin-block-start: 8px;
    padding-inline: ${genericValues.pagePadding};
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: clamp(5svh, 8svh, 32px);
`;
export const SearchWrapper = styled.div`
    position: relative;
    flex: 0 5 50ch;
    width: 100%;
    margin-inline: auto;
    max-inline-size: 65ch;

    @media ${QUERIES.laptopAndUp} {
        margin-inline: 0 auto ;
    }
`;
export const CategoriesWrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 20rem) {
    display: none;
  }
`;

export const Label = styled(DefaultLabel)`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: -32px;
  @media ${QUERIES.tabletAndUp} {
    top: 8px;
    left: 16px;
  }
`;
export const CartQuantity = styled.span`
  position: absolute;
  top: -10px;
  right: 0;
  background-color: ${colors.purple};
  color: ${colors.offWhite};

  padding-inline: 10px;
  padding-block: 0px;
  border-radius: 20px;
  font-size: ${fontSize.icons};
`;
export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  font-weight: 600;
`;

export const DContent = styled(DropdownMenu.Content)`
  min-width: 200px;
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  padding-block: 16px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;
export const DSubTrigger = styled(DropdownMenu.SubTrigger)`
  cursor: pointer;

  &:hover {
    outline: 2px solid ${colors.purpleHover};
  }
`;
export const DItem = styled(DropdownMenu.Item)`
  padding-block: 4px;
  font-weight: 500;
  background-color: ${colors.white000};
  padding-block-end: 8px;
  padding-inline: 8px;

  &:hover {
    outline: 2px solid ${colors.purpleHover};
  }

  z-index: 1;
`;
export const DSeparator = styled(DropdownMenu.Separator)`
  height: 2px;
  color: ${colors.purpleSurface};
`;
export const DSubContent = styled(DropdownMenu.SubContent)`
  font-weight: 500;
  width: auto;
  max-width: 14ch;
  background-color: white;
  border-radius: 6px;
  padding-inline: 8px;
  padding-block: 16px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;
