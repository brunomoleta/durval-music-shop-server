import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useAnuncioContext} from "../../../../../providers/UserContext";
import {IAnuncioContext, IProductForm} from "../../../../../types/anuncios";
import {useUserContext} from "../../../../../providers/UserContext";
import {IUserContext} from "../../../../../types/user";
import {anuncioSchema} from "../../../../../schemas/anuncioSchema";
import {FormUser} from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import Select from "../../../../Select";
import Loader from "../../../../Loader";
import {SendBtn} from "../../../../../styled-components/Button.styles.ts";
import {FormContainer} from "../../../../../styled-components/ProfileItem.style.ts";

function EditAnuncioForm() {
  const { editAnuncio, editingAnuncio } =
    useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: zodResolver(anuncioSchema),
    values: {
      name: editingAnuncio ? editingAnuncio.name : "",
      description: editingAnuncio ? editingAnuncio.description : "",
      price: editingAnuncio ? (editingAnuncio.price) : 0,
      image: editingAnuncio ? editingAnuncio.image : "",
      stock: editingAnuncio ? String(editingAnuncio.stock) : 0,
      color: editingAnuncio ? editingAnuncio.color : "",
      condition: editingAnuncio ? editingAnuncio.condition : "",
      categories: editingAnuncio ? editingAnuncio.categories.toString() : "",
      brandName: editingAnuncio ? editingAnuncio.brandName : "",
    },
  });

  async function submit(formData: IProductForm) {
    const requestData = {
      ...formData,
      stock: Number(formData.stock),
      price: Number(formData.price),
    };

    await editAnuncio(requestData, editingAnuncio!.id);
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
          label="Descrição"
          error={errors.description}
          {...register("description")}
          id={"description"}
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
          id={"image"}
        />
        <Input
          label="Estoque"
          error={errors.stock}
          {...register("stock")}
          id={"stock"}
        />
        <Input
          label="Cor"
          error={errors.color}
          {...register("color")}
          id={"color"}
        />
        <Select
          label="Condição"
          error={errors.condition}
          {...register("condition")}
          id="condition"
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
          id={"categories"}
        />
        <Input
          label="Marca"
          error={errors.brandName}
          {...register("brandName")}
          id={".brandName"}
        />
      </FormContainer>
      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "SALVAR EDIÇÃO"}
      </SendBtn>
    </FormUser>
  );
}

export default EditAnuncioForm;
