import CardImage from "../../../assets/Payment-Information.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CreatePaymentForm from "./Form/CreatePaymentForm";
import { useEffect } from "react";
import PaymentCard from "./PaymentCard";

import {usePaymentContext} from "../../../providers/UserContext/PaymentProvider.tsx";
import {IPaymentContext} from "../../../types/payment";
import {useUserContext} from "../../../providers/UserContext";
import {IUserContext} from "../../../types/user";
import {H1, H2} from "../../../styled-components/Typography.styles.ts";
import Loader from "../../Loader";
import Modal from "../../Modal";
import {AddProfileItemBtn, ProfileContent, ResumeHeader} from "../../../styled-components/ProfileItem.style.ts";


function Payments() {
  const {
    payments,
    isCreatePaymentModalOpen,
    setIsCreatePaymentModalOpen,
    getAllPayments,
  } = usePaymentContext() as IPaymentContext;
  const { isLoading } = useUserContext() as IUserContext;

  useEffect(() => {
    getAllPayments();
  }, []);

  return (
    <>
      <ResumeHeader>
        <H1>CARTÕES</H1>

        <AddProfileItemBtn onClick={() => setIsCreatePaymentModalOpen(true)}>
          <MdOutlineAddCircleOutline size="18" />
          Cartão
        </AddProfileItemBtn>
      </ResumeHeader>

      <div>
        {payments.length > 0 ? (
          <ProfileContent>
            {isLoading ? (
              <Loader />
            ) : (
              payments.map((payment) => (
                <PaymentCard key={payment.id} payment={payment} />
              ))
            )}
          </ProfileContent>
        ) : (
          <>
            <img alt="" src={CardImage} style={{ alignSelf: "center" }} />
            <H2>Nenhum Cartão cadastrado.</H2>
          </>
        )}
      </div>

      <Modal
        open={isCreatePaymentModalOpen}
        onOpenChange={setIsCreatePaymentModalOpen}
        element={CreatePaymentForm()}
      />

    </>
  );
}

export default Payments;
