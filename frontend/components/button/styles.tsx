import styled, { css } from "styled-components";
import colors from "../../contants/colors";

interface ButtonContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: string;
  width: string;
  buttonType: "primary" | "secondary" | "tertiary";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;

  ${(props) =>
    props.buttonType === "primary" &&
    css`
      color: black;
      background-color: ${colors.secondary};
    `}

  ${(props) =>
    props.buttonType === "secondary" &&
    css`
      color: white;
      background: linear-gradient(
        to right,
        ${colors.secondary},
        ${colors.primary}
      );
      border: 2px solid ${colors.secondary};
    `}

  ${(props) =>
    props.buttonType === "tertiary" &&
    css`
      color: white;
      background: linear-gradient(
        to right,
        ${colors.secondary},
        ${colors.primary}
      );
      border: 2px solid black;
    `}

  &:hover {
    opacity: 0.8;
  }
`;
