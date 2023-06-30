("");
import React from "react";
import { ButtonContainer } from "./styles";

export type ButtonType = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
}

const Button: React.FC<ButtonProps> = ({ type, children, height, width }) => {
  const colors = {
    primary: "#0b1c38",
    secondary: "#dbc68f",
  };
  const buttonColor = {
    primary: "black",
    secondary: "white",
    tertiary: "white",
  };
  const buttonBackgroundColor = {
    primary: colors.secondary,
    secondary: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`,
    tertiary: "transparent",
  };

  const border = {
    primary: "none",
    secondary: `2px solid ${colors.secondary}`,
    tertiary: `2px solid ${colors.secondary}`,
  };

  const borderRadius = {
    primary: 4,
    secondary: 4,
    tertiary: 12,
  };

  const font = {
    primary: "normal normal bold 20px/27px Open Sans",
    secondary: "normal normal bold 28px/32px Marine",
    tertiary: "normal normal normal 20px/37px Times New Roman",
  };

  const padding = {
    primary: "0",
    secondary: "0",
    tertiary: "0 32px",
  };
  return (
    <ButtonContainer
      style={{
        color: buttonColor[type],
        background: buttonBackgroundColor[type],
        border: border[type],
        borderRadius: borderRadius[type],
        font: font[type],
        padding: padding[type],
        height,
        width,
      }}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
