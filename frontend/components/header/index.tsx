import React, { useState, useEffect } from "react";
import { FirstHeader, SecondHeader, Menu, MenuItem } from "./styles";

import Image from "next/image";
import logoImage1 from "../../assets/images/logo.png";
import logoImage2 from "../../assets/images/logo2.png";

import Button from "../button";
import messages from "./messages";
import useWindowWidth from "../../service/hooks/useWindowWidth";
import { size } from "../../contants/breakpoints";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useWindowWidth() <= parseInt(size.md);

  const logoWidth = isMobile ? 220 : 200;
  const logoHeight = isMobile ? 80 : 60;
  const buttonWidth = isMobile ? "160PX" : "160px";
  const buttonHeight = isMobile ? "55px" : "55px";

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FirstHeader className={scrolled ? "scrolled" : ""}>
        <Image
          src={logoImage1}
          alt="Logo 2"
          width={logoWidth}
          height={logoHeight}
        />
        {!isMobile && (
          <Menu>
            <MenuItem>{messages.home}</MenuItem>
            <MenuItem>{messages.whoWeAre}</MenuItem>
            <MenuItem>{messages.solutions}</MenuItem>
            <MenuItem>{messages.methodology}</MenuItem>
            <MenuItem>{messages.blog}</MenuItem>
          </Menu>
        )}

        <Button
          width={buttonWidth}
          height={buttonHeight}
          label={messages.buttonText}
          buttonType="type1"
        />
      </FirstHeader>

      <SecondHeader>
        <Image
          src={logoImage2}
          alt="Logo 2"
          width={logoWidth}
          height={logoHeight}
        />
        <Menu>
          <Image
            src={logoImage1}
            alt="Logo 1"
            width={logoWidth}
            height={logoHeight}
          />
        </Menu>

        <Button
          width={buttonWidth}
          buttonType="type1"
          height={buttonHeight}
          label={messages.buttonText}
        />
      </SecondHeader>
    </>
  );
};

export default Header;
