"use-client";
import Button from "../Button";
import BurguerMenu from "../BurguerMenu";
import HeaderLink from "../HeaderLink";
import { HeaderContainer, LogoText, LinksContainer } from "./styles";
import { useState, useEffect } from "react";

type Screensize = { dynamicWidth: number; dynamicHeight: number };
export default function Header() {
  const [screenSize, getDimension] = useState<Screensize>();
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    setDimension();
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <HeaderContainer>
      <LogoText>LIGHTHOUSE</LogoText>
      <LinksContainer>
        <HeaderLink isActive>Home</HeaderLink>
        <HeaderLink>Quem Somos</HeaderLink>
        <HeaderLink>Soluções</HeaderLink>
        <HeaderLink>Metodologia</HeaderLink>
        <HeaderLink>Blog</HeaderLink>
      </LinksContainer>
      {screenSize?.dynamicWidth >= 884 && (
        <Button type="primary" height={51} width={183}>
          Contato
        </Button>
      )}
      {screenSize?.dynamicWidth < 884 && <BurguerMenu />}
    </HeaderContainer>
  );
}
