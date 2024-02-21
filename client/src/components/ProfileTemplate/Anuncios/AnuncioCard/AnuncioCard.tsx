import styled from "styled-components";
import EditAnuncioForm from "../Form/EditAnuncioForm";
import { Link } from "react-router-dom";
import { colors } from "../../../../styled-components/root.ts";
import {
  IAnuncio,
  IAnuncioCard,
  IAnuncioContext,
} from "../../../../types/anuncios";
import { useAnuncioContext } from "../../../../providers/UserContext";
 import { useProductContext } from "../../../../providers/UserContext";
import { IFullProductContext } from "../../../../types/product";
import {
  Button,
  Card,
  CardTitle,
  CartButtons,
  CartContent,
} from "../../../../styled-components/resumeCard.styles.ts";
import Modal from "../../../Modal";
import ModalQuit from "../../../Modal/ModalQuit";
import { priceToString } from "../../../../services/utils.ts";

const ViewButton = styled(Link)`
  color: ${colors.purple};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Span = styled.span`
  font-weight: 600;
`;
const Li = styled.li`
  display: flex;
  gap: 8px;
`;

export function AnuncioCard(props: IAnuncioCard) {
  const { anuncio } = props;
  const { name, condition, stock, price, brandName } = anuncio;
  const {
    isEditAnuncioModalOpen,
    setIsEditAnuncioModalOpen,
    setEditingAnuncio,
    setIsDeleteAnuncioModalOpen,
    isDeleteAnuncioModalOpen,
    deleteAnuncio,
  } = useAnuncioContext() as IAnuncioContext;
  const { getProductById } = useProductContext() as IFullProductContext;

  function handleEditPost(anuncio: IAnuncio) {
    setEditingAnuncio(anuncio);
    setIsEditAnuncioModalOpen(true);
  }

  return (
    <Card>
      <CardTitle>{`${name.toUpperCase()} - ${brandName.toUpperCase()}`}</CardTitle>
      <CartContent>
        <ul>
          <Li>
            <Span>Preço:</Span> {priceToString(price)}
          </Li>
          <Li>
            <Span>Estoque:</Span> {stock}
          </Li>
          <Li>
            <Span>Condição:</Span>
            {condition === "new" ? "Novo" : "Usado"}
          </Li>
        </ul>
        <CartButtons>
          <ViewButton
            to={`/products/${String(anuncio.id)}`}
            onClick={async () => {
              await getProductById(anuncio.id);
              window.scrollTo(0, 0);
            }}
            tabIndex={0}
          >
            Ver
          </ViewButton>
          <Button
            style={{ color: "black" }}
            onClick={() => handleEditPost(anuncio)}
          >
            Editar
          </Button>
          <Button onClick={() => setIsDeleteAnuncioModalOpen(true)}>
            Excluir
          </Button>
        </CartButtons>
      </CartContent>
      <Modal
        title="editar anúncio"
        open={isEditAnuncioModalOpen}
        onOpenChange={setIsEditAnuncioModalOpen}
        element={EditAnuncioForm()}
      />
      <Modal
        title={`Tens certeza de remover o produto: ${anuncio.name}?`}
        open={isDeleteAnuncioModalOpen}
        onOpenChange={setIsDeleteAnuncioModalOpen}
        element={
          <ModalQuit
            handleCloseModalClick={() => setIsDeleteAnuncioModalOpen(false)}
            handleQuitButtonClick={() => deleteAnuncio(anuncio)}
          />
        }
      />
    </Card>
  );
}

export default AnuncioCard;
