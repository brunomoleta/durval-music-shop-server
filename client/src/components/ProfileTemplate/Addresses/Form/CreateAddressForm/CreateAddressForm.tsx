import { IAddressContext, IAddressForm } from "../../../../../types/address";
import { useAddressContext } from "../../../../../providers/UserContext/AddressProvider.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../../../../../schemas/addressSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import { SendBtn } from "../../../../../styled-components/Button.styles.ts";
import { FormContainer } from "../../../../../styled-components/ProfileItem.style.ts";

function CreateAddressForm() {
  const { createAddressRequest } = useAddressContext() as IAddressContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IAddressForm>({
    resolver: zodResolver(addressSchema),
  });

  async function submit(formData: IAddressForm) {
    const requestData = { ...formData, number: Number(formData.number) };
    await createAddressRequest(requestData);
    reset();
  }

  async function searchZip(zipCode: string) {
    const newZipCode = zipCode.replace("-", "");

    const url = `https://brasilapi.com.br/api/cep/v1/${Number(newZipCode)}`;
    try {
      const { data } = await axios.get(url);
      const { street, neighborhood, city, state } = data;

      setValue("street", street);
      setValue("neihborhood", neighborhood);
      setValue("city", city);
      setValue("state", state);
      toast.success("Achamos o endereço :)");
    } catch (error) {
      toast.error("Endereço não encontrado :(");
    }
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <FormContainer>
        <Input
          label="Nome"
          error={errors.name}
          {...register("name")}
          id={"name"}
        />
        <Input
          label="CEP"
          error={errors.zip}
          {...register("zip")}
          id={"zip"}
          onBlur={(e) =>
            e.target.value.length >= 7 && searchZip(e.target.value)
          }
        />
        <Input
          label="Rua"
          error={errors.street}
          {...register("street")}
          id={"street"}
        />
        <Input
          label="Número"
          type="number"
          error={errors.number}
          {...register("number")}
          id={"number"}
        />
        <Input
          label="Bairro"
          error={errors.neihborhood}
          {...register("neihborhood")}
          id={"neihborhood"}
        />
        <Input
          label="Cidade"
          error={errors.city}
          {...register("city")}
          id={"city"}
        />
        <Input
          label="Estado"
          error={errors.state}
          {...register("state")}
          id={"state"}
        />
        <Input
          label="Complemento (Opcional)"
          error={errors.complement}
          {...register("complement")}
          id={"complement"}
        />
      </FormContainer>
      <SendBtn type="submit">CADASTRAR ENDEREÇO</SendBtn>
    </FormUser>
  );
}

export default CreateAddressForm;
