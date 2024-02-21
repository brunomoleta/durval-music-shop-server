import styled from "styled-components";
import {colors} from "./root.ts";
import {QUERIES} from "../services/database.ts";

export const ResumeHeader = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;

  @media ${QUERIES.tabletAndUp} {
    flex-flow: unset;
    justify-content: space-between;
  }
`;

export const ProfileContent = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 20px;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;

export const AddProfileItemBtn = styled.button`
  padding: 16px;
  border-radius: 20px;
  transition: scale 500ms;

  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  background-color: ${colors.purple};
  color: ${colors.white000};

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.purpleHover};
  }
`;

export const FormContainer = styled.div`
  overflow-y: auto;
  padding-inline-end: 16px;
`;
