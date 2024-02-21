import styled from "styled-components";
import { colors, genericValues } from "../../../styled-components/root.ts";
import { Link } from "react-router-dom";
import {QUERIES} from "../../../services/database.ts";

export const Foot = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(0px, 8vw, 200px);
  box-shadow: 0 -9px 16px 1.5px #dddddd;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  font-size: ${genericValues.clampFontSize};
`;

export const DivContainer = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-inline: ${genericValues.pagePadding};
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
    gap: 80px;
  }
`;

export const DivUp = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding-inline: ${genericValues.pagePadding};
  gap: 50px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const DivLogos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UlSocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 300px;
`;

export const LiSocialMedia = styled.li`
  display: flex;
  gap: 20px;
`;

export const AnchorMedias = styled(Link)``;

export const ImgMediaLogos = styled.img`
  width: 30px;
  height: 30px;

  @media ${QUERIES.tabletAndUp} {
    width: 35px;
    height: 35px;
  }
`;

export const DivDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const SpanTerms = styled.span`
  color: grey;
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    width: 50%;
  }
`;

export const DivColumns = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  gap: 15px;

  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

export const TitleColumns = styled.h6`
  color: grey;
`;

export const UlOptions = styled.ul`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Li = styled.li`
  color: ${colors.black};
  font-weight: 500;
`;

export const UlDownload = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LiDownload = styled.li``;

export const AnchorStores = styled(Link)``;

export const ImgStores = styled.img`
  width: 180px;

  @media ${QUERIES.tabletAndUp} {
    width: 200px;
  }
`;
