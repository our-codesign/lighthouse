("");
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0b1c38;
  height: 146px;
  border-bottom: 8px solid #dbc68f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 5%;
  width: 100%;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  z-index: 99999999;
  @media (max-width: 884px) {
    padding: 30px;
  }
`;

export const LogoText = styled.h1`
  color: #dbc68f;
  font: normal normal normal 30px Aboreto;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 884px) {
    display: none;
  }
`;
