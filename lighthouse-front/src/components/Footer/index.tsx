import React from "react";
import {
  FooterContainer,
  FooterColumn,
  FooterItem,
  FooterBorder,
  FooterColumnWrapper,
  Container,
  CardImage,
} from "./styles";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";
import Image from "next/image";
import { messages } from "./messages";
import LOGO from "../../assets/images/LOGO-LIGHTHOUSEBRANCO.png";
import { Link } from "react-scroll";

const Footer = () => {
  const contactInfo = [
    {
      icon: locationIcon,
      alt: "Location Icon",
      text: messages.address,
    },
    {
      icon: phoneIcon,
      alt: "Phone Icon",
      text: messages.phone,
    },
    {
      icon: emailIcon,
      alt: "Email Icon",
      text: messages.email,
    },
  ];

  const menuItems = [
    { text: messages.home, id: "home" },
    { text: messages.whoWeAre, id: "quemSomos" },
    { text: messages.solutions, id: "solucoes" },
    { text: messages.methodology, id: "metodologia" },
    { text: messages.blog, id: "blog" },
    { text: messages.contact, id: "fale-conosco" },
  ];

  return (
    <FooterContainer>
      <FooterBorder />

      <Container>
        <CardImage>
          <Image src={LOGO} alt="logo branca" width={200} />
        </CardImage>

        <FooterColumnWrapper>
          <FooterColumn>
            <FooterItem>{messages.contactUs}</FooterItem>
            {contactInfo.map((info, index) => (
              <FooterItem key={index}>
                <Image src={info.icon} alt={info.alt} width={24} height={24} />
                {info.text}
              </FooterItem>
            ))}
          </FooterColumn>
          <FooterColumn>
            <FooterItem>{messages.menu}</FooterItem>
            {menuItems.map((item, index) => (
              <Link
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
              >
                <FooterItem>{item.text}</FooterItem>
              </Link>
            ))}
          </FooterColumn>
        </FooterColumnWrapper>
        <div style={{ flex: 0.8 }}></div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
