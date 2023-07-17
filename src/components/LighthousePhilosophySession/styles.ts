import styled from "styled-components";

interface WrapperProps {
  containerIndex?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  min-height: 100vh;
  height: 100%;
  height: fit-content;
  background-image: ${({ containerIndex }) =>
    `url("/FILOSOFIA${containerIndex || 0}.webp")`};
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  width: 100vw;
  max-width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  @media (max-width: 600px) {
    background-size: 120vw 100%;
    min-height: 100%;
  }
`;

export const Filter1 = styled.div`
  position: absolute;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  width: 100%;
  min-height: 100vh;
  z-index: 2;
  background: transparent
    linear-gradient(90deg, #0b1c380f 0%, #0b1c387a 70%, #0b1c38 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
`;

export const Filter2 = styled.div`
  position: absolute;
  left: 0;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent
    linear-gradient(
      90deg,
      #0b1c38 0%,
      #0b1c3800 37%,
      #0b1c38c2 49%,
      #0b1c3870 95%,
      #0b1c38 100%
    )
    0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Filter3 = styled.div`
  position: absolute;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent
    linear-gradient(
      90deg,
      #0b1c38 0%,
      #0b1c3885 17%,
      #0b1c3800 37%,
      #0b1c3800 49%,
      #0b1c3845 72%,
      #0b1c3800 85%,
      #0b1c38 100%
    )
    0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Filter4 = styled.div`
  position: absolute;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent
    linear-gradient(
      90deg,
      #0b1c38 0%,
      #0b1c3885 18%,
      #0b1c3800 37%,
      #0b1c387a 49%,
      #0b1c3885 72%,
      #0b1c3863 85%,
      #0b1c38 100%
    )
    0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const CardContainer0 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  @media (max-width: 1350px) {
    width: 100%;
    height: 600px;
    align-items: center;
    margin: 0;
    padding: 0 100px;
  }
  @media (max-width: 600px) {
    padding: 0 50px;
    height: 400px;
  }
`;

export const LightHouseSpan = styled.span`
  color: #dbc68f;
`;

export const DescriptionContainer0 = styled.p`
  text-align: left;
  font: normal normal normal 32px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  z-index: 999;
  @media (max-width: 1350px) {
    font: normal normal normal 16px Times New Roman;
    padding-left: 50px;
  }
`;

export const CardContainer1 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  z-index: 4;

  @media (max-width: 1350px) {
    width: 100%;
    height: 50%;
    margin: 0;
    align-items: center;
    padding: 0 100px;
    height: 600px;
  }
  @media (max-width: 800px) {
    padding: 0;
    height: 400px;
  }
`;

export const Arrow1Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardContainer1Title = styled.h1`
  text-align: left;
  font: normal normal normal 42px Aboreto;
  letter-spacing: 0px;
  color: #dbc68f;
  opacity: 1;
  margin: 0;
  @media (max-width: 1350px) {
    white-space: nowrap;
    font: normal normal normal 20px Aboreto;
  }
`;

export const CardContainer1TitleSub = styled.p`
  font: normal normal normal 32px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  margin-bottom: 0px;
  @media (max-width: 1350px) {
    font: normal normal normal 13px Aboreto;
    white-space: nowrap;
    padding-left: 80px;
  }
`;

export const CardContainer1TitleLighthouse = styled.p`
  text-align: left;
  font: normal normal normal 88px/102px Aboreto;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: 1350px) {
    font: normal normal normal 33px Aboreto;
    margin-top: 10px;
    white-space: nowrap;
    padding-left: 100px;
  }
`;

export const Divider = styled.div`
  background: #dbc68f;
  width: 85%;
  height: 3.5px;
  border-radius: 90%;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
  margin-bottom: 26px;
  @media (max-width: 1350px) {
    margin-left: 100px;
  }
`;
export const CardContainer1Description = styled.p`
  text-align: left;
  font: normal normal normal 22px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: 1350px) {
    padding-left: 110px;

    font: normal normal normal 15px Times New Roman;
  }
`;

export const CardContainer2 = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  z-index: 4;
  @media (max-width: 1350px) {
    width: 100%;
    height: 50%;
    margin: 0;
    height: 600px;
    align-items: center;
    padding: 0 100px;
  }
  @media (max-width: 600px) {
    padding: 0px;
    height: 600px;
  }
`;

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CardContainer2Title = styled.h1`
  text-align: left;
  font: normal normal normal 42px Aboreto;
  letter-spacing: 0px;
  color: #dbc68f;
  opacity: 1;
  margin: 0;
  @media (max-width: 1350px) {
    white-space: nowrap;
    font: normal normal normal 18px Aboreto;
  }
`;

export const CardContainer2TitleSub = styled.p`
  text-align: center;
  font: normal normal normal 32px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 50px;
  @media (max-width: 1350px) {
    font: normal normal normal 15px Times New Roman;
    white-space: nowrap;
    margin-bottom: 0;
  }
`;

export const CardContainer2SubTitle = styled.h2`
  text-align: left;
  font: normal normal bold 26px Marine;
  letter-spacing: 0px;
  color: #efc88b;
  opacity: 1;
  margin-bottom: 0;
  @media (max-width: 1350px) {
    white-space: nowrap;
    margin-left: 100px;
    font: normal normal bold 15px Marine;
  }
`;

export const CardContainer2SubDescription = styled.p`
  text-align: left;
  font: normal normal normal 22px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: lowercase;
  opacity: 1;
  @media (max-width: 1350px) {
    font: normal normal normal 15px Times New Roman;
    width: 50%;
    margin-left: 100px;
  }
`;

export const Arrow2Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardContainer3 = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  z-index: 4;
  @media (max-width: 1350px) {
    width: 100%;
    height: 600px;
    margin: 0;
    align-items: center;
    padding: 0 100px;
  }
  @media (max-width: 600px) {
    padding: 0 50px;
    height: 600px;
  }
`;

export const CardContainer3Title = styled.h1`
  text-align: left;
  font: normal normal normal 32px Aboreto;
  letter-spacing: 0px;
  color: #dbc68f;
  opacity: 1;
  margin: 0;
  @media (max-width: 1350px) {
    text-align: center;
    font: normal normal normal 22px Aboreto;
  }
`;

export const CardContainer3TitleSub = styled.p`
  text-align: left;
  font: normal normal normal 22px Marine;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 30px;
  @media (max-width: 1350px) {
    font: normal normal normal 15px Marine;
  }
`;

export const CardContainer3SubDescription = styled.p`
  text-align: left;
  font: normal normal normal 22px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: 1350px) {
    font: normal normal normal 15px Marine;
  }
`;

export const CardContainer3SubDescriptionWrapper = styled.div`
  @media (min-width: 1350px) {
    margin: 0 32px;
    button {
      margin: 0 -32px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
