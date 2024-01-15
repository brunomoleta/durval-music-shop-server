import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAnuncioContext, IProductForm } from "../../../../../types/anuncios";
import { useAnuncioContext } from "../../../../../providers/UserContext/AnuncioProvider.tsx";
import { useUserContext } from "../../../../../providers/UserContext";
import { IUserContext } from "../../../../../types/user";
import { anuncioSchema } from "../../../../../schemas/anuncioSchema";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import Select from "../../../../Select";
import { SendBtn } from "../../../../../styled-components/Button.styles.ts";
import Loader from "../../../../Loader";
import { FormContainer } from "../../../../../styled-components/ProfileItem.style.ts";
import React from "react";

function CreateAnuncioForm() {
  const { createAnuncioRequest } = useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;

  const id = React.useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProductForm>({
    resolver: zodResolver(anuncioSchema),
  });

  async function submit(formData: IProductForm) {
    const requestData = {
      ...formData,
      stock: Number(formData.stock),
      price: Number(formData.price),
      brandName: formData.brandName.toLowerCase(),
    };

    await createAnuncioRequest(requestData);
    reset();
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <FormContainer>
        <Input
          label="Nome"
          error={errors.name}
          {...register("name")}
          id={`${id}-name`}
        />
        <Input
          label="Descrição"
          error={errors.description}
          {...register("description")}
          id={`${id}-description`}
        />
        <Input
          label="Preço (R$)"
          type="number"
          error={errors.price}
          {...register("price")}
          id={"price"}
        />
        <Input
          label="Imagem"
          error={errors.image}
          {...register("image")}
          id={`${id}-image`}
        />
        <Input
          label="Estoque"
          error={errors.stock}
          {...register("stock")}
          id={`${id}-stock`}
        />
        <Input
          label="Cor"
          error={errors.color}
          {...register("color")}
          id={`${id}-color`}
        />
        <Select
          label="Condição"
          error={errors.condition}
          {...register("condition")}
          id={`${id}-condition`}
          defaultValue=""
        >
          <option value="" disabled>
            Selecionar
          </option>
          <option value="new">Novo</option>
          <option value="used">Usado</option>
        </Select>
        <Input
          label="Categorias"
          error={errors.categories}
          {...register("categories")}
          id={`${id}-categories`}
        />
        <Input
          label="Marca"
          error={errors.brandName}
          {...register("brandName")}
          id={`${id}-brandName`}
        />
      </FormContainer>
      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "CADASTRAR ANUNCIO"}
      </SendBtn>
    </FormUser>
  );
}

export default CreateAnuncioForm;
