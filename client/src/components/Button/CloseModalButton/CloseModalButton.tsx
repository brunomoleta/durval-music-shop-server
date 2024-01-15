import { X } from "react-feather";
import { ModalButton } from "../../../styled-components/Button.styles.ts";
import { DClose } from "../../../styled-components/Modal.styles.tsx";

function CloseModalButton() {
  return (
    <>
      <DClose asChild>
        <ModalButton aria-label="Close">
          <X size={20} />
        </ModalButton>
      </DClose>
    </>
  );
}

export default CloseModalButton;
