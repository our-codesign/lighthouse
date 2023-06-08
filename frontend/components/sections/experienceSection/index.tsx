import React from "react";
import Button from "../../button";
import Image from "next/image";
import {
  MainContainer,
  CardContainer,
  CustomCard,
  ButtonContainer,
  MainTitle,
  SubTitle,
} from "./styles";
import barImage from "../../../assets/images/barra.png";

import messages from "./messages";

const ExperienceSection: React.FC = () => {
  return (
    <MainContainer>
      <MainTitle>{messages.mainTitle}</MainTitle>
      <SubTitle>{messages.subTitle}</SubTitle>
      <Image src={barImage} alt="Bar" width={900} />

      <CardContainer>
        {messages.cardContents.map((content, index) => (
          <CustomCard key={index}>
            {index === 0 && (
              <>
                <p className="title">{content.title}</p>
                <p>{content.text1}</p>
                <Image src={barImage} alt="Bar" width={300} height={20} />
                <p>{content.text2}</p>
                <Image src={barImage} alt="Bar" width={300} height={20} />
                <p>{content.text3}</p>
              </>
            )}
            {index !== 0 && (
              <>
                <p className="title">{content.title}</p>
                <p>{content.text}</p>
              </>
            )}
          </CustomCard>
        ))}
      </CardContainer>

      <ButtonContainer>
        <Button
          label={messages.buttonText}
          height="70px"
          width="300px"
          buttonType="secondary"
        />
      </ButtonContainer>
    </MainContainer>
  );
};

export default ExperienceSection;
