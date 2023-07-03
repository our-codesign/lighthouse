import React from "react";

import Modal, { TModalProps } from "../Modal";

import { Card } from "./styled";
import Button from "../Button";

export type TDialogProps = TModalProps;
const Dialog: React.FC<TDialogProps> = ({ children, ...rest }) => {
  return (
    <Modal {...rest}>
      <Card>
        {children}
        <div style={{ position: "absolute", right: 5, top: 10 }}>
          <Button type="round" height={30} width={30} onClick={rest.onDismiss}>
            X
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Dialog;
