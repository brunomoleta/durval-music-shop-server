import React, { ForwardedRef } from "react";
import { IInput } from "../../../../types/types";
import {
  DefaultLabel,
  Field,
} from "../../../../styled-components/Modal.styles.tsx";
import { useUserContext } from "../../../../providers/UserContext";
import { Eye, EyeOff } from "react-feather";
import { IUserContext } from "../../../../types/user";
import { PasswordButton } from "../../../../styled-components/Button.styles.ts";
import {LabelWrapper, Span, StyledInput} from "../../../../styled-components/Input.styles.ts";



const Input = React.forwardRef(
  (
    { error, id, type = "text", label, ...delegated }: IInput,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { changePasswordVisibility } = useUserContext() as IUserContext;
    return (
      <>
        <Field>
          <LabelWrapper>
            <DefaultLabel htmlFor={id}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </DefaultLabel>
            <Span>{error && error.message}</Span>
          </LabelWrapper>
          <div style={{ position: "relative" }}>
            <StyledInput type={type} id={id} ref={ref} {...delegated} />
            {label.toLowerCase().includes("senha") && (
              <PasswordButton
                onClick={(event) => {
                  event.preventDefault();
                  changePasswordVisibility();
                }}
              >
                {type === "text" ? <Eye /> : <EyeOff />}
              </PasswordButton>
            )}
          </div>
        </Field>
      </>
    );
  },
);
export default Input;
