import EditAddressForm from "../Form/EditAddressForm";
import {
  IAddress,
  IAddressCard,
  IAddressContext,
} from "../../../../types/address";
import { useAddressContext } from "../../../../providers/UserContext/AddressProvider.tsx";
import {
  Button,
  Card,
  CardTitle,
  CartButtons,
  CartContent,
} from "../../../../styled-components/resumeCard.styles.ts";
import Modal from "../../../Modal";
import ModalQuit from "../../../Modal/ModalQuit";

export function AddressCard(props: IAddressCard) {
  const { address } = props;
  const {
    isEditAddressModalOpen,
    setIsEditAddressModalOpen,
    setEditingAddress,
    setIsDeleteAddressModalOpen,
    isDeleteAddressModalOpen,
    deleteAddress,
  } = useAddressContext() as IAddressContext;

  function handleEditPost(address: IAddress) {
    setEditingAddress(address);
    setIsEditAddressModalOpen(true);
  }

  return (
    <Card>
      <CardTitle>{address.name.toUpperCase()}</CardTitle>
      <CartContent>
        <div>
          <p>{`${address.street}, nº ${address.number}, ${address.neihborhood} - ${address.city}/${address.state}`}</p>
          <p>
            {`CEP: ${address.zip}`}
            {address.complement ? `| (${address.complement})` : null}
          </p>
        </div>
        <CartButtons>
          <Button
            style={{ color: "black" }}
            onClick={() => handleEditPost(address)}
          >
            Editar
          </Button>
          <Button onClick={() => setIsDeleteAddressModalOpen(true)}>
            Excluir
          </Button>
        </CartButtons>
        <Modal
          title="Editar endereço"
          open={isEditAddressModalOpen}
          onOpenChange={setIsEditAddressModalOpen}
          element={EditAddressForm()}
        />

        <Modal
          title={`Tens certeza de remover o endereço de ${address.name}?`}
          open={isDeleteAddressModalOpen}
          onOpenChange={setIsDeleteAddressModalOpen}
          element={
            <ModalQuit
              handleCloseModalClick={() => setIsDeleteAddressModalOpen(false)}
              handleQuitButtonClick={() => deleteAddress(address)}
            />
          }
        />
      </CartContent>
    </Card>
  );
}

export default AddressCard;
