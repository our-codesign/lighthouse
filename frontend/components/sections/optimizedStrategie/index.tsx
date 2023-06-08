// OptimizedStrategies.tsx

import React from "react";
import Button from "../../button";
import TitleComponent from "../../title";
import { ParentContainer, InnerCard, BarImage, ContainerText } from "./styles";
import messages from "./messages";
import barImage from "../../../assets/images/barra.png";
import Image from "next/image";
import useWindowWidth from "../../../service/hooks/useWindowWidth";
import { size } from "../../../contants/breakpoints";

const OptimizedStrategies: React.FC = () => {
  const isMobile = useWindowWidth() <= parseInt(size.lg);
  const imageWidth = isMobile ? 800 : 1100;

  return (
    <ParentContainer>
      <InnerCard>
        <ContainerText>
          <TitleComponent>{messages.title1}</TitleComponent>
          <TitleComponent>{messages.title2}</TitleComponent>
        </ContainerText>

        <Image src={barImage} alt="Bar" width={imageWidth} height={20} />
        <Button
          label={messages.buttonText}
          height="80px"
          width="400px"
          buttonType="secondary"
        />
      </InnerCard>
    </ParentContainer>
  );
};

export default OptimizedStrategies;
