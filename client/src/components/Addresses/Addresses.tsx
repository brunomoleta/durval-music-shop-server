import styled from "styled-components";
import { H1, H2 } from "../../styled-components/Typography.styles";
import { useAddressContext } from "../../providers/UserContext/AddressProvider";
import { IAddressContext } from "../../types/address";
import NotFound from "../../assets/No-Order.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import CreateAddressForm from "./Form/CreateAddressForm";
import { useEffect } from "react";
import { AddressCard } from "./AddressCard/AddressCard";
import Modal from "../Modal";

const AddressContent = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;

const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddAddressBtn = styled.button`
padding: 16px;
border-radius: 20px;
transition: .05s;
  
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  &:hover{
    outline: 2px solid hsla(242, 62%, 56%, 1);
    background-color: #fff;
  }
`;

function Addresses() {

    const { addresses, isCreateAddressModalOpen, setIsCreateAddressModalOpen, getAllAddresses } = useAddressContext() as IAddressContext;

    useEffect(() => {
      getAllAddresses();
    }, []);


  return (
    <>
      <AddressHeader>
        <H1>ENDEREÇOS</H1>
        <AddAddressBtn onClick={() => setIsCreateAddressModalOpen(!isCreateAddressModalOpen)}>
          <MdOutlineAddCircleOutline size="18" />
          Endereço
          </AddAddressBtn>
      </AddressHeader>

      <AddressContent>

        {addresses.length > 0 ? (
          addresses.map((address) => (
            <AddressCard key={address.id} address={address}/>
            ))
            ) : (
              <>
            <img src={NotFound} style={{width: 'fit-content'}}/>
            <H2>Nada por aqui!</H2>
          </>
        )}

      </AddressContent>
      <Modal open={isCreateAddressModalOpen} onOpenChange={setIsCreateAddressModalOpen} element={CreateAddressForm()}/>
        
    </>
  )
}

export default Addresses;
