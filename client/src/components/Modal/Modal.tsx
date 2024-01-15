import * as Dialog from "@radix-ui/react-dialog";
import { DContent, DOverLay } from "../../styled-components/Modal.styles.tsx";
import { IModal } from "../../types/types";
import ModalHeader from "./ModalHeader";

function Modal({
  open,
  onOpenChange,

  element,
  title = "",
  button,
  maxWidth = "700px",
  overflow = "unset",
}: IModal) {
  return (
    <Dialog.Root modal={true} open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DOverLay />
        <DContent style={{ maxWidth: maxWidth, overflow: overflow }}>
          <ModalHeader button={button} title={title} />
          {element}
        </DContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
