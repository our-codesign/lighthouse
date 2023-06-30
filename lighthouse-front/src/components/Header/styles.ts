"use-client";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0b1c38;
  height: 146px;
  border-bottom: 8px solid #dbc68f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 95px;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
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
`;
