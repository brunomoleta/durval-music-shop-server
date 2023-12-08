import styled from "styled-components";
import { colors } from "./root.ts";

export const Wrapper = styled.div<{ $isBigger?: boolean|null }>`
  @keyframes floatBy {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateY(-50%);
      opacity: 0;
    }
  }

  animation: floatBy 1200ms both cubic-bezier(0, 0.66, 0.48, 1);
  position: absolute;
  top: 0;
  left: 1px;
  color: ${(props) => (props.$isBigger ? colors.purpleBorder : colors.red60)}

`;
