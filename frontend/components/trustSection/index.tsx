import React from "react";
import Image from "next/image";
import logo2 from "../../assets/images/logo2SizeBig.png";
import Button from "../button";
import {
  TrustContainer,
  LabelSection,
  Label,
  ControlSection,
  ImageContainer,
  TextContainer,
} from "./styles";

import messages from "./messages";
import useWindowWidth from "../../service/hooks/useWindowWidth";
import { size } from "../../contants/breakpoints";

const TrustSection: React.FC = () => {
  const isMobile = useWindowWidth() <= parseInt(size.md);

  const buttonWidth = isMobile ? "300px" : "15vw";

  return (
    <TrustContainer>
      <LabelSection>
        <Label>{messages.trust}</Label>
        <Label>{messages.simplicity}</Label>
        <Label>{messages.transparency}</Label>
      </LabelSection>

      <ControlSection>
        <ImageContainer>
          <Image src={logo2} alt="Logo" />
        </ImageContainer>
        <TextContainer>
          <h2>{messages.youInControl}</h2>
          <p>{messages.loremIpsum}</p>
          <p style={{ marginBottom: "3rem" }}>{messages.loremIpsumShort}</p>

          <Button
            label={messages.learnMore}
            height="70px"
            width={buttonWidth}
            buttonType="type2"
          />
        </TextContainer>
      </ControlSection>
    </TrustContainer>
  );
};

export default TrustSection;
