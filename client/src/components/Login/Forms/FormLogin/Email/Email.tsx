import React from "react";

import { Form } from "../../../../../styled-components/Modal.styles.tsx";
import { useUserContext } from "../../../../../providers/UserContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../Input";
import { IUserContext } from "../../../../../types/user";
import { SendBtn } from "../../../../../styled-components/Button.styles.ts";
import emailSchema from "../../../../../schemas/emailSchema";

function Email() {

  const { loginInfo, setLoginInfo, setStepLogin } =
    useUserContext() as IUserContext;

  const id = React.useId();
  const emailId = `${id}-email`;


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
  });

  function submit(formData: { email: string }) {
    setLoginInfo({ ...loginInfo, ...formData });
    setStepLogin(1);
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        label="e-mail"
        type="text"
        error={errors.email}
        {...register("email")}
        id={emailId}
      />

      <SendBtn type='submit'>AVANÇAR</SendBtn>
    </Form>
  );
}

export default Email;
