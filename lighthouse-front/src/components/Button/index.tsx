import React from "react";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  width = "px-8",
  height = "py-4",
  fontSize = "font-bold",
  onClick,
}) => {
  let style: string;

  switch (type) {
    case ButtonType.PRIMARY:
      style = `bg-secondary text-black ${width} ${height} rounded ${fontSize} hover:bg-secondaryDarker`;
      break;
    case ButtonType.SECONDARY:
      style = `bg-gradient-to-r from-secondary to-primary border-2 border-secondary text-white ${width} ${height} rounded ${fontSize} hover:bg-secondaryDarker`;
      break;
    case ButtonType.TERTIARY:
      style = `bg-transparent border-2 border-secondary text-white ${width} ${height} rounded-lg ${fontSize} hover:bg-secondaryDarker`;
      break;

    default:
      style = `bg-secondary text-black px-4 py-2 rounded ${fontSize} hover:bg-secondaryDarker`;
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
