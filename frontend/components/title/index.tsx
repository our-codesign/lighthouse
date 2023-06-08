import React from "react";
import { StyledTitle, TitleProps } from "./styles";

const TitleComponent: React.FC<TitleProps> = ({ children, width }) => {
  return <StyledTitle width={width}>{children}</StyledTitle>;
};

export default TitleComponent;
