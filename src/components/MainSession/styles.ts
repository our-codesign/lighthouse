import styled from "styled-components";

export const MainSessionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Filter = styled.div`
  position: absolute;
  margin-top: -100px;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent linear-gradient(180deg, #1e2f479c 0%, #0b1c38 100%) 0%
    0% no-repeat padding-box;
`;

export const MainSessionTitle = styled.h1`
  text-align: center;
  font: normal normal normal 50px/62px Aboreto;
  letter-spacing: 3px;
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
  width: 20%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  height: 0px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
  border: 2px solid #dbc68f;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
`;

export const RightDivider = styled.div`
  background: #dbc68f 0% 0% no-repeat padding-box;
  width: 20%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  height: 0px;
  border: 2px solid #dbc68f;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
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
  width: 300px;
  height: 3.5px;
  margin-top: 8px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 99999;
  border-radius: 90%;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  z-index: 9999;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #dbc68f;
  z-index: 999;
  position: relative;
  bottom: 2px;
`;

export const GetToKownContainer = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5%;
`;

export const WhatsApp = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyWhatsApp = styled.i``;
