import React from "react";

import Modal, { TModalProps } from "../Modal";

import { Card } from "./styled";
import Button from "../Button";

export type TDialogProps = TModalProps & {
  height?: number;
  width?: string;
};
const Dialog: React.FC<TDialogProps> = ({
  children,
  height = 600,
  width,
  ...rest
}) => {
  return (
    <Modal {...rest}>
      <Card style={{ height, maxWidth: width || "100%" }}>
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
