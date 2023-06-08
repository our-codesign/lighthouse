// Button.tsx
import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string;
  height?: string;
  width?: string;
  buttonType: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  height = "2rem",
  width = "auto",
  buttonType = "primary",
}) => {
  return (
    <ButtonContainer height={height} width={width} buttonType={buttonType}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
