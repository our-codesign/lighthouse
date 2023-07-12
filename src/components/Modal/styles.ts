import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  z-index: 9999999999999;
`;
export const ModalBackdrop = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  justify-content: center;
  align-items: center;
`;
