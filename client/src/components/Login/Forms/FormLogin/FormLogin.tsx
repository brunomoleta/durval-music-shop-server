import { useUserContext } from "../../../../providers/UserContext";
import { IUserContext } from "../../../../types/user";
import Email from "./Email";
import Password from "./Password";
import React from "react";

function FormLogin() {
  const { loginInfo } = useUserContext() as IUserContext;
  React.useEffect(() => {
    console.log(loginInfo);
  }, [loginInfo]);

  const { stepLogin } = useUserContext() as IUserContext;

  return (
    <>
      {stepLogin === 0 && <Email />}
      {stepLogin === 1 && <Password />}
    </>
  );
}

export default FormLogin;
