import React from "react";
import Image from "next/image";
import barImage from "../../../assets/images/barra.png";
import playButtonImage from "../../../assets/images/playButton.png";
import { InviteContainer, LeftCard, Main, RightCard, Title } from "./styles";
import messages from "./messages";
import useWindowWidth from "../../../service/hooks/useWindowWidth";
import { size } from "../../../contants/breakpoints";

const InviteSection: React.FC = () => {
  const isMobile = useWindowWidth() <= parseInt(size.md);

  return (
    <InviteContainer>
      <Main>
        <LeftCard>
          <Title>{messages.titleLine1}</Title>
          <Title className="larger">{messages.titleLine2}</Title>
          <Title>{messages.titleLine3}</Title>

          <Image src={barImage} alt="Bar Image" />

          <p>{messages.smallText}</p>
        </LeftCard>
        <RightCard isMobile={isMobile}>
          <Image src={playButtonImage} alt="Play Button" />
        </RightCard>
      </Main>
    </InviteContainer>
  );
};

export default InviteSection;
