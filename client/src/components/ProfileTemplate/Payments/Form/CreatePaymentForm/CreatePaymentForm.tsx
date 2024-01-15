import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {IPaymentContext, IPaymentForm} from "../../../../../types/payment";
import {IUserContext} from "../../../../../types/user";
import {usePaymentContext} from "../../../../../providers/UserContext/PaymentProvider.tsx";
import {useUserContext} from "../../../../../providers/UserContext";
import {paymentSchema} from "../../../../../schemas/paymentSchema";
import {FormUser} from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import Select from "../../../../Select";
import {SendBtn} from "../../../../../styled-components/Button.styles.ts";
import Loader from "../../../../Loader";
import {FormContainer} from "../../../../../styled-components/ProfileItem.style.ts";

function CreatePaymentForm() {
  const { createPaymentRequest } = usePaymentContext() as IPaymentContext;
  const { isLoading } = useUserContext() as IUserContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPaymentForm>({
    resolver: zodResolver(paymentSchema),
  });

  async function submit(formData: IPaymentForm) {
    await createPaymentRequest(formData);
    reset();
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <FormContainer>
        <Input
          label="Número do Cartão"
          error={errors.number}
          {...register("number")}
          id="name"
        />
        <Select
          label="Tipo de Cartão"
          error={errors.type}
          {...register("type")}
          id="type"
          defaultValue=""
        >
          <option value="" disabled>
            Selecionar
          </option>
          <option value="debit">Débito</option>
          <option value="credit">Crédito</option>
        </Select>
      </FormContainer>
      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "CADASTRAR CARTÃO"}
      </SendBtn>
    </FormUser>
  );
}

export default CreatePaymentForm;
