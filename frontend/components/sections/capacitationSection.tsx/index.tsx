import React from "react";
import Button from "../../button";
import {
  CapacitationContainer,
  ImageContainer,
  Image,
  ContentContainer,
  ListItem,
  List,
  ListItemImage,
  ListItemText,
  ButtonContainer,
  Main,
} from "./styles";
import messages from "./messages";
import useWindowWidth from "../../../service/hooks/useWindowWidth";
import { size } from "../../../contants/breakpoints";
import notebookImage from "../../../assets/images/notbook.png";
import checkImage from "../../../assets/images/check.png";
import TitleComponent from "../../title";

const CapacitationSection: React.FC = () => {
  const isMobile = useWindowWidth() <= parseInt(size.lg);
  const buttonWidth = isMobile ? "300px" : "15vw";

  return (
    <CapacitationContainer>
      <Main>
        {!isMobile && (
          <ImageContainer>
            <Image src={notebookImage.src} alt="Notebook" />
          </ImageContainer>
        )}
        <ContentContainer>
          <TitleComponent>{messages.title}</TitleComponent>
          <List>
            {messages.listItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemImage src={checkImage.src} alt="Check" />
                <ListItemText>{item}</ListItemText>
              </ListItem>
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
        </ContentContainer>
      </Main>
    </CapacitationContainer>
  );
};

export default CapacitationSection;
