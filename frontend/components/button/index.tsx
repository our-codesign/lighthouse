// Button.tsx
import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string;
  height?: string;
  width?: string;
  buttonType: "type1" | "type2";
}

const Button: React.FC<ButtonProps> = ({
  label,
  height = "2rem",
  width = "auto",
  buttonType = "type1",
}) => {
  return (
    <ButtonContainer height={height} width={width} buttonType={buttonType}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
