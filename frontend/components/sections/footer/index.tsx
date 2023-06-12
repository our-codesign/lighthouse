import React from "react";
import {
  FooterContainer,
  FooterColumn,
  FooterItem,
  FooterBorder,
} from "./styles";
import locationIcon from "../../../assets/images/locationIcon.png";
import phoneIcon from "../../../assets/images/phoneIcon.png";
import emailIcon from "../../../assets/images/emailIcon.png";
import Image from "next/image";
import messages from "./messages";

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
    messages.whoWeAre,
    messages.solutions,
    messages.methodology,
    messages.blog,
  ];

  const policyItems = [
    messages.privacyPolicy,
    messages.cookiePolicy,
    messages.settings,
  ];

  return (
    <FooterContainer>
      <FooterBorder />
      <FooterColumn>
        <FooterItem className="title">{messages.contactUs}</FooterItem>
        {contactInfo.map((info, index) => (
          <FooterItem key={index}>
            <Image src={info.icon} alt={info.alt} width={24} height={24} />
            {info.text}
          </FooterItem>
        ))}
      </FooterColumn>

      <FooterColumn>
        <FooterItem className="title">{messages.home}</FooterItem>
        {menuItems.map((item, index) => (
          <FooterItem key={index}>{item}</FooterItem>
        ))}
      </FooterColumn>

      <FooterColumn>
        <FooterItem className="title hidden">{messages.contactUs}</FooterItem>
        {policyItems.map((item, index) => (
          <FooterItem key={index}>{item}</FooterItem>
        ))}
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;
