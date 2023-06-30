import styled from "styled-components";

export const MainSessionContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-image: url("/HOME.png");
  top: 146px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
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
  font: normal normal normal 50px/62px Aboreto;
  letter-spacing: 1px;
  color: #dbc68f;
  @media (max-width: 884px) {
    font: normal normal normal 30px/32px Aboreto;
  }
  margin: 0;
  z-index: 999;
`;

export const MainSessionDescription = styled.p`
  text-align: center;
  font: normal normal 500 20px/31px Open Sans;
  @media (max-width: 884px) {
    font: normal normal 500 15px/21px Open Sans;
  }
  letter-spacing: 0px;
  color: #fafafa;
  opacity: 1;
  z-index: 999;
  margin: 0;
`;

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

export const LeftDivider = styled.div`
  background: #dbc68f 0% 0% no-repeat padding-box;
  width: 30%;
  height: 7px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
`;

export const RightDivider = styled.div`
  background: #dbc68f 0% 0% no-repeat padding-box;
  width: 30%;
  height: 7px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
`;

export const GetToKnow = styled.h3`
  text-align: center;
  font: normal normal normal 35px/41px Aboreto;
  @media (max-width: 884px) {
    font: normal normal normal 20px/22px Aboreto;
  }
  letter-spacing: 1px;
  color: #dbc68f;
  margin: 0;
  margin-top: 200px;
  z-index: 999;
`;
export const Divider = styled.div`
  background: #dbc68f 0% 0% no-repeat padding-box;
  width: 200px;
  height: 4px;
  margin-top: 8px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
`;
