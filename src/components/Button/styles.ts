import styled, { css } from "styled-components";

type ButtonProps = {
  mobileHeigh?: number;
};
export const ButtonContainer = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 884px) {
    height: ${({ mobileHeigh }) => mobileHeigh}px !important;
  }

  white-space: nowrap;
  font-family: marine, sans-serif;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
      background-color: gray !important;
      border-color: gray;
    `}
  z-index: 999 !important;
  &:hover {
    opacity: 0.8;
  }
`;
