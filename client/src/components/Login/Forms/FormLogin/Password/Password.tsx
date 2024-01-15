import React from "react";

import { Form } from "../../../../../styled-components/Modal.styles.tsx";
import { useUserContext } from "../../../../../providers/UserContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../Input";
import { IUserContext } from "../../../../../types/user";
import { SendBtn } from "../../../../../styled-components/Button.styles.ts";
import Loader from "../../../../Loader";
import { simplePasswordSchema } from "../../../../../schemas/passwordSchema/simplePasswordSchema.ts";

function Password() {
  const {
    setLoginInfo,
    isLoading,
    setStepLogin,
    loginRequest,
    loginInfo,
    isPasswordVisible,
  } = useUserContext() as IUserContext;

  const id = React.useId();
  const passwordId = `${id}-password`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>({
    resolver: zodResolver(simplePasswordSchema),
  });

  async function submit(formData: { password: string }) {
    console.log({ ...loginInfo, ...formData });
    await loginRequest({ ...loginInfo, ...formData });
    setStepLogin(0);
    setLoginInfo({});
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        label="senha"
        type={isPasswordVisible ? "text" : "password"}
        error={errors.password}
        {...register("password")}
        id={passwordId}
      />

      <SendBtn disabled={isLoading}>{isLoading ? <Loader /> : "LOGIN"}</SendBtn>
    </Form>
  );
}

export default Password;
