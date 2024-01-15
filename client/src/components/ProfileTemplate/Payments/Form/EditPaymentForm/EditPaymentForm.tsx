import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendBtn } from "../../../../../styled-components/Button.styles.ts";
import Loader from "../../../../Loader";
import Select from "../../../../Select";
import Input from "../../../../Login/Forms/Input";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import { IPaymentContext, IPaymentForm } from "../../../../../types/payment";
import { useUserContext } from "../../../../../providers/UserContext";
import { usePaymentContext } from "../../../../../providers/UserContext/PaymentProvider.tsx";
import { IUserContext } from "../../../../../types/user";
import { paymentSchema } from "../../../../../schemas/paymentSchema";
import { FormContainer } from "../../../../../styled-components/ProfileItem.style.ts";

function EditPaymentForm() {
  const { editPayment, editingPayment } =
    usePaymentContext() as IPaymentContext;
  const { isLoading } = useUserContext() as IUserContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPaymentForm>({
    resolver: zodResolver(paymentSchema),
    values: {
      number: editingPayment ? editingPayment.number : "",
      type: editingPayment ? editingPayment.type : "",
    },
  });

  async function submit(formData: IPaymentForm) {
    await editPayment(formData, editingPayment!.id);
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
        >
          <option value="" disabled>
            Selecionar
          </option>
          <option value="debit">Débito</option>
          <option value="credit">Crédito</option>
        </Select>
      </FormContainer>
      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "EDITAR CARTÃO"}
      </SendBtn>{" "}
    </FormUser>
  );
}

export default EditPaymentForm;
