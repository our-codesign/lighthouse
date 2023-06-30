"use-client";
import React from "react";
import { ButtonContainer } from "./styles";

export type ButtonType = "primary" | "secondary";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  height?: number;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({ type, children, height, width }) => {
  const colors = {
    primary: "#0b1c38",
    secondary: "#dbc68f",
  };
  const buttonColor = {
    primary: "black",
    secondary: "white",
  };
  const buttonBackgroundColor = {
    primary: colors.secondary,
    secondary: `linear-gradient(to right, ${colors.secondary}, ${colors.primary});`,
  };

  const border = {
    primary: "none",
    secondary: `border: 2px solid ${colors.secondary}`,
  };

  return (
    <ButtonContainer
      style={{
        color: buttonColor[type],
        backgroundColor: buttonBackgroundColor[type],
        border: border[type],
        height,
        width,
      }}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
