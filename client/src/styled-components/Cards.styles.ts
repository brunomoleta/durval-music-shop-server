import styled from "styled-components";
import { colors, genericValues } from "./root.ts";
import {QUERIES} from "../services/database.ts";

export const Cards = styled.ul`
  width: 100%;
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

  @media ${QUERIES.laptopAndUp} {
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

  @media ${QUERIES.laptopAndUp} {
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
  
  @media (max-width: 680px){
  flex: 0 0 100%;
    
  }
`;
export const CardProd = styled(Card)`
  border-radius: 8px;
  outline: 2px solid ${colors.purpleSurface};
  position: relative;
  
  flex: 0 0 100%;
  @media ${QUERIES.tabletAndUp}{
    flex: 0 0 50%;
    
  }
  
`;

export const CardGrid = styled.div`
  align-items: normal;
  display: grid;
  justify-items: center;
  gap: 24px;
  padding-inline: 16px;
  margin-block: 10px;
`

export const ProductGrid = styled(CardGrid)`
  gap: 20px;
  text-align: left;
  margin-bottom: 24px;
  & * {
    width: 100%;
  }
`

