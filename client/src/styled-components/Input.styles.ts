import styled from "styled-components";
import {colors, fontSize} from "./root.ts";

export const StyledInput = styled.input`
  width: 100%;
  border-bottom: 2px solid ${colors.black};

  &:focus {
    border: none;
    border-bottom: 2px solid ${colors.purple};
    outline: 1px solid transparent;
  }
}
`;
export const Span = styled.span`
  color: ${colors.red70};
  width: fit-content;
  @media (max-width: 500px) {
    font-size: ${fontSize.smallLink};
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media (min-width: 500px) {
    flex-flow: unset;
    justify-content: space-between;
  }
`;