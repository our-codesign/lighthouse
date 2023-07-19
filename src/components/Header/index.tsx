import Button from "../Button";
import BurguerMenu from "../BurguerMenu";
import HeaderLink from "../HeaderLink";
import { HeaderContainer, LogoText, LinksContainer } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
  const buttonWidth =
    screenSize && screenSize.dynamicWidth >= 884 ? "20%" : "15%";
  return (
    <HeaderContainer>
      <LogoText>LIGHTHOUSE</LogoText>
      <LinksContainer>
        <HeaderLink to="home">Home</HeaderLink>
        <HeaderLink to="quemSomos">Quem Somos</HeaderLink>
        <HeaderLink to="solucoes">Soluções</HeaderLink>
        <HeaderLink to="metodologia">Metodologia</HeaderLink>
        <HeaderLink to="blog" isBlog={true}>
          Blog
        </HeaderLink>
        <HeaderLink to="fale-conosco">Fale Conosco</HeaderLink>
      </LinksContainer>
      {screenSize && screenSize.dynamicWidth >= 884 && (
        <Link
          activeClass="active"
          to="fale-conosco"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button type="primary" width={"100%"}>
            Entrar em contato
          </Button>
        </Link>
      )}
      {screenSize && screenSize.dynamicWidth < 884 && <BurguerMenu />}
    </HeaderContainer>
  );
}
