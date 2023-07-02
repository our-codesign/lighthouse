import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 700px;
  background: transparent url("/FILOSOFIA.png") 0% 0% no-repeat padding-box;
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

export const CardContainer = styled.div`
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

export const DescriptionContainer = styled.p`
  text-align: left;
  font: normal normal normal 32px Times New Roman;
  letter-spacing: 0px;
  color: #ffffff;
  z-index: 999;
`;
