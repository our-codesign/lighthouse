import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;

  z-index: 999 !important;
  &:hover {
    opacity: 0.8;
  }
`;
