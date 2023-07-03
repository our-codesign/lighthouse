import React, {
  MouseEvent,
  PropsWithChildren,
  useEffect,
  ReactElement,
} from "react";

import { ModalBackdrop, ModalContainer, ModalContent } from "./styles";

export type TModalProps = {
  isVisible: boolean;
  children: ReactElement<any, any>;
  onDismiss: () => void;
};

const Modal: React.FC<PropsWithChildren<TModalProps>> = ({
  children,
  isVisible,
  onDismiss,
}) => {
  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const preventPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackdropClick = (e: MouseEvent) => {
    e.stopPropagation();
    onDismiss();
  };

  if (!isVisible) return null;

  return (
    <ModalContainer>
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent onClick={preventPropagation}>{children}</ModalContent>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default Modal;
