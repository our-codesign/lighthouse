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
    if (!screenSize) setDimension();
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <HeaderContainer>
      <LogoText>LIGHTHOUSE</LogoText>
      <LinksContainer>
        <HeaderLink to="home">Home</HeaderLink>
        <HeaderLink to="quemSomos">Quem Somos</HeaderLink>
        <HeaderLink to="solucoes">Soluções</HeaderLink>
        <HeaderLink to="metodologia">Metodologia</HeaderLink>
        <HeaderLink to="blog">Blog</HeaderLink>
        <HeaderLink to="fale-conosco">Fale Conosco</HeaderLink>
      </LinksContainer>
      {screenSize && screenSize.dynamicWidth >= 884 && (
        <Button type="primary" height={51} width={183}>
          Contato
        </Button>
      )}
      {screenSize && screenSize.dynamicWidth < 884 && <BurguerMenu />}
    </HeaderContainer>
  );
}
