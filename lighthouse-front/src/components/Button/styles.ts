import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
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
