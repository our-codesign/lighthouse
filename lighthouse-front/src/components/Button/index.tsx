import React from "react";
import { ButtonContainer } from "./styles";

export type ButtonType = "primary" | "secondary" | "tertiary" | "round";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
  onClick?: (e?: any) => void;
  minWidth?: number | string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  height,
  width,
  minWidth,
  disabled,
  onClick,
}) => {
  const colors = {
    primary: "#0b1c38",
    secondary: "#dbc68f",
  };
  const buttonColor = {
    primary: "black",
    secondary: "white",
    tertiary: "white",
    round: "black",
  };
  const buttonBackgroundColor = {
    primary: colors.secondary,
    secondary: disabled
      ? "gray"
      : `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`,
    tertiary: "transparent",
    round: colors.secondary,
  };

  const border = {
    primary: "none",
    secondary: disabled ? "gray" : `2px solid ${colors.secondary}`,
    tertiary: `2px solid ${colors.secondary}`,
    round: "none",
  };

  const borderRadius = {
    primary: 4,
    secondary: 4,
    tertiary: 12,
    round: "50%",
  };

  const font = {
    primary: "normal normal bold 16px/20px Open Sans",
    secondary: "normal normal bold 18px Marine",
    tertiary: "normal normal normal 20px/37px Times New Roman",
    round: "normal normal bold 20px/27px Open Sans", // added round property
  };

  const padding = {
    primary: "0",
    secondary: "0px",
    tertiary: "0 32px",
    round: "0px",
  };

  return (
    <ButtonContainer
      onClick={(e: any) => onClick && onClick(e)}
      disabled={disabled}
      style={{
        color: buttonColor[type],
        background: buttonBackgroundColor[type],
        border: border[type],
        borderRadius: borderRadius[type],
        font: font[type],
        padding: padding[type],
        height,
        width,
        minWidth: minWidth,
      }}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
