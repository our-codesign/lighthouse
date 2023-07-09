import styled from "styled-components";

export const ExperienceContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-image: url("/METODO.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  flex-direction: column;
`;
export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #0b1b37;
  opacity: 0.8;
`;

export const ExperienceTitle = styled.h1`
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

export const CardTitle = styled.h1`
  text-align: center;
  font: normal normal normal 20px/22px Aboreto;
  letter-spacing: 1px;
  color: #dbc68f;
  margin: 0;
  z-index: 999;
  @media (max-width: 884px) {
    position: absolute;
    top: 40%;
  }
`;

export const CardDescription = styled.p`
  text-align: center;
  font: normal normal 300 20px/21px Times New Roman;
  letter-spacing: 0px;
  @media (max-width: 884px) {
    display: none;
  }
  color: #fafafa;
  opacity: 1;
  z-index: 999;
  margin: 0;
`;
export const ExperienceDescription = styled.p`
  text-align: center;
  font: normal normal 500 30px/41px Open Sans;
  @media (max-width: 884px) {
    font: normal normal 500 25px/31px Open Sans;
  }
  letter-spacing: 0px;
  color: #fafafa;
  opacity: 1;
  z-index: 999;
  margin: 0;
`;

export const Divider = styled.div`
  background: #dbc68f;
  width: 40%;
  height: 3.5px;
  border-radius: 90%;

  margin-top: 8px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
`;

export const GlowingCardsContainer = styled.div`
  display: flex;
  z-index: 999;
  margin-top: 70px;
  margin-bottom: 70px;
  align-items: center;
  width: 90%;
  gap: 20px;
  overflow: auto;
  padding-bottom: 10px;
  @media (max-width: 884px) {
    flex-wrap: wrap;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbc68f;
    border-radius: 5px;
  }
`;

export const GlowingCard = styled.div`
  min-height: 250px;
  max-height: 250px;
  min-width: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 10px #ffffff;
  border: 5px solid #e4c78d;
  border-radius: 20px;
  opacity: 1;
  z-index: 999;
  @media (max-width: 884px) {
    min-height: 100px;
    max-height: 100px;
    padding: 0;
    top: 0;
    position: relative;
    box-sizing: border-box;
  }
  gap: 40px;
  padding: 50px 20px;
`;

export const ExperienceDescriptionCard = styled.div`
  border-bottom: 2px solid #dbc68f;
  padding-bottom: 2px;
  border-bottom-left-radius: 90% 2%;
  border-bottom-right-radius: 90% 2%;
`;
