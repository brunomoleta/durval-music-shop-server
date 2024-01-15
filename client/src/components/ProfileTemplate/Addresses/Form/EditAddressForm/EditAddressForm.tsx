import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {useAddressContext} from "../../../../../providers/UserContext/AddressProvider.tsx";
import {IAddressContext, IAddressForm} from "../../../../../types/address";
import {useUserContext} from "../../../../../providers/UserContext";
import {IUserContext} from "../../../../../types/user";
import {addressSchema} from "../../../../../schemas/addressSchema";
import {FormUser} from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import {SendBtn} from "../../../../../styled-components/Button.styles.ts";
import Loader from "../../../../Loader";
import {FormContainer} from "../../../../../styled-components/ProfileItem.style.ts";

function EditAddressForm() {
  const { editAddress, editingAddress } =
    useAddressContext() as IAddressContext;
  const { isLoading } = useUserContext() as IUserContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IAddressForm>({
    resolver: zodResolver(addressSchema),
    values: {
      name: editingAddress ? editingAddress.name : "",
      zip: editingAddress ? editingAddress.zip : "",
      street: editingAddress ? editingAddress.street : "",
      number: editingAddress ? Number(editingAddress.number) : 0,
      neihborhood: editingAddress ? editingAddress.neihborhood : "",
      city: editingAddress ? editingAddress.city : "",
      state: editingAddress ? editingAddress.state : "",
      complement: editingAddress ? editingAddress.complement : "",
    },
  });

  async function submit(formData: IAddressForm) {
    const requestData = { ...formData, number: Number(formData.number) };

    await editAddress(requestData, editingAddress!.id);
  }

  async function searchZip(zipCode: string) {
    const url = `https://brasilapi.com.br/api/cep/v1/${Number(zipCode)}`;
    try {
      const { data } = await axios.get(url);

      setValue("street", data.street);
      setValue("neihborhood", data.neighborhood);
      setValue("city", data.city);
      setValue("state", data.state);
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
          label="CEP (Apenas números)"
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

      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "EDITAR ENDEREÇO"}
      </SendBtn>
    </FormUser>
  );
}

export default EditAddressForm;
