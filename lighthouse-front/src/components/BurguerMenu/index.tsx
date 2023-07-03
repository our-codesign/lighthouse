import React, { useState } from "react";
import styled from "styled-components";
import HeaderLink from "../HeaderLink";

type SidebarProps = {
  isOpen: boolean;
};

// Estilos para a barra lateral
const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: #0b1c38;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Estilos para o botão de fechamento
const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

// Estilos para o menu de hambúrguer
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: #dbc68f;
  transition: background-color 0.3s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Wrapper onClick={handleToggle}>
        <Bar />
        <Bar />
        <Bar />
      </Wrapper>

      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>X</CloseButton>
        <HeaderLink onClick={closeSidebar} to="home">
          Home
        </HeaderLink>
        <HeaderLink onClick={closeSidebar} to="quemSomos">
          Quem Somos
        </HeaderLink>
        <HeaderLink onClick={closeSidebar} to="solucoes">
          Soluções
        </HeaderLink>
        <HeaderLink onClick={closeSidebar} to="metodologia">
          Metodologia
        </HeaderLink>
        <HeaderLink onClick={closeSidebar} to="blog">
          Blog
        </HeaderLink>
        <HeaderLink onClick={closeSidebar} to="fale-conosco">
          Fale Conosco
        </HeaderLink>
      </Sidebar>
    </div>
  );
};

export default BurgerMenu;
