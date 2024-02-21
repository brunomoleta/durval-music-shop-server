import { colors } from "../../../styled-components/root.ts";
import { useUserContext } from "../../../providers/UserContext";

import styled from "styled-components";
import { IUserContext } from "../../../types/user";
import {QUERIES} from "../../../services/database.ts";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media ${QUERIES.tabletAndUp} {
    flex-flow: row;
  }
`;

const Question = styled.h3`
  @media ${QUERIES.tabletAndUp} {
    text-align: center;
  }
`;

function AlternateForm(question: string, buttonText: string) {
  const { cleanUpRequests } = useUserContext() as IUserContext;

  return (
    <Wrapper>
      <Question>{question}</Question>
      <button
        onClick={() => {
          cleanUpRequests();
        }}
        style={{
          textDecoration: "underline",
          backgroundColor: "inherit",
          color: colors.purple,
          fontWeight: 500,
        }}
      >
        {buttonText}
      </button>
    </Wrapper>
  );
}

export default AlternateForm;
