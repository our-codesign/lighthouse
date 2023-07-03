import styled from "styled-components";

interface WrapperProps {
  containerIndex?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  min-height: 700px;
  height: fit-content;
  background: ${({ containerIndex }) =>
    `transparent url("/FILOSOFIA${
      containerIndex || 0
    }.png") 0% 0% no-repeat padding-box`};
  opacity: 1;
  background-size: cover;
  width: 100vw;
  max-width: 100vw;
  position: relative;
  background-color: #0b1b37;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  @media (max-width: 1350px) {
    flex-direction: column-reverse;
  }
`;

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent
    linear-gradient(
      90deg,
      #0b1c380f 0%,
      #0b1c387a 10%,
      #0b1c38d6 21%,
      #0b1c3891 64%,
      #0b1c38 92%,
      #0b1c38 100%
    )
    0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const CardContainer0 = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  @media (max-width: 1350px) {
    width: 80%;
    height: 50%;
    margin-left: -0px;
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
`;

export const CardContainer1 = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  @media (max-width: 1350px) {
    width: 80%;
    height: 50%;
    margin-left: -0px;
  }
`;

export const CardContainer1Title = styled.h1`
  text-align: left;
  font: normal normal normal 42px Aboreto;
  letter-spacing: 0px;
  color: #dbc68f;
  opacity: 1;
  margin: 0;
`;

export const CardContainer1TitleSub = styled.p`
  font: normal normal normal 32px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  margin-bottom: 0px;
`;

export const CardContainer1TitleLighthouse = styled.p`
  text-align: left;
  font: normal normal normal 88px/102px Aboreto;
  letter-spacing: 0px;
  color: #ffffff;
  border-bottom: 2px solid #dbc68f;
  margin-top: 0;
  margin-bottom: 26px;
`;

export const CardContainer1Description = styled.p`
  text-align: left;
  font: normal normal normal 22px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

export const CardContainer2 = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  @media (max-width: 1350px) {
    width: 80%;
    height: 50%;
    margin-left: -0px;
  }
`;

export const CardContainer2Title = styled.h1`
  text-align: left;
  font: normal normal normal 42px Aboreto;
  letter-spacing: 0px;
  color: #dbc68f;
  opacity: 1;
  margin: 0;
`;

export const CardContainer2TitleSub = styled.p`
  text-align: center;
  font: normal normal normal 32px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 50px;
`;

export const CardContainer2SubTitle = styled.h2`
  text-align: left;
  font: normal normal bold 26px Marine;
  letter-spacing: 0px;
  color: #efc88b;
  opacity: 1;
  margin-bottom: 0;
`;

export const CardContainer2SubDescription = styled.p`
  text-align: left;
  font: normal normal normal 22px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: lowercase;
  opacity: 1;
`;

export const CardContainer3 = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 200px;
  @media (max-width: 1350px) {
    width: 80%;
    height: 50%;
    margin-left: -0px;
  }
`;

export const CardContainer3Title = styled.h1`
  text-align: left;
  font: normal normal normal 32px Aboreto;
  letter-spacing: 0px;
  color: #dbc68f;
  opacity: 1;
  margin: 0;
`;

export const CardContainer3TitleSub = styled.p`
  text-align: left;
  font: normal normal normal 22px Marine;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 30px;
`;

export const CardContainer3SubDescription = styled.p`
  text-align: left;
  font: normal normal normal 22px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
