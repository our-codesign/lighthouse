import React from "react";
import Button from "../../button";
import {
  WhyInvestContainer,
  Card,
  ListItemNumber,
  ListItemText,
  List,
  ButtonContainer,
} from "./styles";
import messages from "./messages";
import useWindowWidth from "../../../service/hooks/useWindowWidth";
import { size } from "../../../contants/breakpoints";
import TitleComponent from "../../title";

const WhyInvestSection: React.FC = () => {
  const isMobile = useWindowWidth() <= parseInt(size.lg);
  const buttonWidth = isMobile ? "300px" : "15vw";

  return (
    <WhyInvestContainer>
      <Card>
        <TitleComponent width="60%">{messages.title}</TitleComponent>
        <List>
          {messages.listItems.map((item, index) => (
            <li key={index}>
              <ListItemNumber>
                {index < 9 ? `0${index + 1}` : index + 1}
              </ListItemNumber>
              <ListItemText>{item}</ListItemText>
            </li>
          ))}
        </List>
        <ButtonContainer>
          <Button
            label={messages.buttonText}
            height="70px"
            width={buttonWidth}
            buttonType="secondary"
          />
        </ButtonContainer>
      </Card>
    </WhyInvestContainer>
  );
};

export default WhyInvestSection;
