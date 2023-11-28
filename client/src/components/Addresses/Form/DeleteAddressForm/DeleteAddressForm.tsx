import styled from "styled-components";
import { useAddressContext } from "../../../../providers/UserContext/AddressProvider";
import { H2 } from "../../../../styled-components/Typography.styles";
import { IAddressContext } from "../../../../types/address";
import { colors } from "../../../../styled-components/root";
import Trash from "../../../../assets/Remove-Confirmation.svg"
import Loader from "../../../Loader";

const Card = styled.div`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
  
        gap: 10px;
    `;

    const CartButtons = styled.div`
        display: flex;
        align-self: center;
        gap: 20px; 
    `;

    const Button = styled.button`
        padding: 16px;
        border-radius: 20px;
        transition: .05s;
        outline: 2px solid ${colors.grey90};
        
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

        &:hover{
            background-color: ${colors.grey10};
        }

        &:disabled {
            background-color: ${colors.grey20};
            cursor: wait;
        }
    `;

    const RemoveButton = styled(Button)`
        color: ${colors.white000};
        background-color: ${colors.red60};

        &:hover{
            background-color: ${colors.red80};
        }
    `;

function DeleteAddressForm() {

    const { deletingAddress: address, deleteAddress, setIsDeleteAddressModalOpen, isLoading } = useAddressContext() as IAddressContext;

    return (
        <div>
            <Card style={{alignItems: "center"}}>
                <H2>Você realmente deseja excluir o endereço {address?.name}?</H2>

                    <img src={Trash}/>

                <CartButtons>
                    <Button onClick={() => setIsDeleteAddressModalOpen(false)}>Cancelar</Button>
                    <RemoveButton onClick={() => deleteAddress(address!)} disabled={isLoading}>{isLoading ? <Loader/> : "Excluir"}</RemoveButton>
                </CartButtons>
            </Card>
        </div>
    );
};

export default DeleteAddressForm;