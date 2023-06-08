// HeroStyles.ts
import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/lighthouse.jpg") no-repeat top center / cover;
  z-index: 1;
`;

export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(11, 28, 56, 0.5);
`;

export const CenteredImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  object-fit: cover;
  z-index: 2;
`;
export const BottomImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  z-index: 2;
  margin-top: -170px;
`;
