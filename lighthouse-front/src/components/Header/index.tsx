"use-client";
import Button from "../Button";
import HeaderLink from "../HeaderLink";
import { HeaderContainer, LogoText, LinksContainer } from "./styles";

export default function Header() {
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
      <Button type="primary" height={51} width={183}>
        Contato
      </Button>
    </HeaderContainer>
  );
}
