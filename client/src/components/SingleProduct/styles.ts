import styled from "styled-components";
import {genericValues} from "../../styled-components/root.ts";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: ${genericValues.genericMaxWidth};
`;
