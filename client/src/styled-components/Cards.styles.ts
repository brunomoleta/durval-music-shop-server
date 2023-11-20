import styled from "styled-components";
import { colors, genericValues } from "./root.ts";

export const Cards = styled.ul`
  display: flex;
  gap: 16px;
  
  margin-inline: 16px;

  max-width: ${genericValues.pageWidth};
  
  padding-inline: ${genericValues.pagePadding};
  padding-block: 24px;

  border: 2px solid ${colors.grey30};
  border-radius: 8px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;

    border: 2px solid transparent;
  }
`;

export const ProductCards = styled.ol`
  display: flex;
  gap: 32px;
  
  max-width: ${genericValues.pageWidth};

  border-radius: 8px;
  border: 2px solid ${colors.grey30};


  padding-inline: ${genericValues.pagePadding};
  padding-block: 24px;


  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;

    border: 2px solid transparent;
  }
`

export const Card = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 0 0 50%;

  gap: 24px;
`;
export const CardProd = styled(Card)`
  flex: 0 0 100%;
  border-radius: 8px;
  outline: 2px solid ${colors.purpleSurface};
  
  
  
`;

export const CardGrid = styled.div`
    align-items: normal;
    display: grid;
    grid-template-rows: auto  100px auto;
    justify-items: center;
    gap: 24px;
  padding-inline: 16px;
  padding-block: 16px;
`

export const ProductGrid = styled(CardGrid)`
  grid-template-rows: auto auto;
  text-align: left;
  & * {
    width: 100%;
  }
`
