import { styled } from "styled-components";

export const ExperienceContainer = styled.div`
  width: 100%;
  min-height: 800px;
  background-image: url("/METODO.png");
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
  background: transparent linear-gradient(180deg, #0b1b379c 0%, #0b1b37 100%) 0%
    0% no-repeat padding-box;
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

export const ExperienceDescription = styled.p`
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
