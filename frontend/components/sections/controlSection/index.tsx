import React from "react";
import Button from "../../button";
import TitleComponent from "../../title";
import { ParentCard, ChildCard, Title, ContainerText } from "./styles";
import messages from "./messages";
import barImage from "../../../assets/images/barra.png";

const ControlSection: React.FC = () => {
  return (
    <ParentCard>
      <ChildCard>
        <ContainerText>
          <Title>{messages.title}</Title>
          <TitleComponent width="90%">{messages.subTitle}</TitleComponent>
        </ContainerText>

        <Button
          label={messages.buttonText}
          height="80px"
          width="350px"
          buttonType="tertiary"
        />
      </ChildCard>
    </ParentCard>
  );
};

export default ControlSection;
