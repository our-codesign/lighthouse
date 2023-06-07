import styled, { css } from "styled-components";
import colors from "../../contants/colors";

interface ButtonContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: string;
  width: string;
  buttonType: "type1" | "type2";
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
    props.buttonType === "type1" &&
    css`
      color: black;
      background-color: ${colors.secondary};
    `}

  ${(props) =>
    props.buttonType === "type2" &&
    css`
      color: white;
      background: linear-gradient(
        to right,
        ${colors.secondary},
        ${colors.primary}
      );
      border: 2px solid ${colors.secondary};
    `}

  &:hover {
    opacity: 0.8;
  }
`;
