// styles.ts

import styled from "styled-components";
import colors from "../../../contants/colors";

export const ParentContainer = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 6rem;
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BarImage = styled.img`
  width: 100%;
  max-width: 300px;
`;
