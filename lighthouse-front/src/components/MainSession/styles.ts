import { styled } from "styled-components";

export const MainSessionContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("/HOME.png");
  top: 146px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent linear-gradient(180deg, #1e2f479c 0%, #0b1c38 100%) 0%
    0% no-repeat padding-box;
`;

export const MainSessionTitle = styled.h1`
  text-align: center;
  font: normal normal normal 80px/92px Aboreto;
  letter-spacing: 1px;
  color: #dbc68f;
`;
