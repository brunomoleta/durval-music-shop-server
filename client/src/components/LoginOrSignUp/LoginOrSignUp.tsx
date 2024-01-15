import { DDescription } from "../../styled-components/Modal.styles.tsx";
import FormSignUp from "../Login/Forms/FormSignUp";
import AlternateForm from "../Login/AlternateForm";
import FormLogin from "../Login/Forms/FormLogin";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LogInInfo, SignUpInfo } from "../../services/database.ts";

function LoginOrSignUp(isSignUp: boolean) {
  return (
    <>
      <DDescription>
        <VisuallyHidden>
          {isSignUp ? SignUpInfo.description : LogInInfo.description}
        </VisuallyHidden>
      </DDescription>

      {isSignUp ? <FormSignUp /> : <FormLogin />}
      {isSignUp
        ? AlternateForm(SignUpInfo.question, SignUpInfo.buttonTitle)
        : AlternateForm(LogInInfo.question, LogInInfo.buttonTitle)}
    </>
  );
}

export default LoginOrSignUp;
