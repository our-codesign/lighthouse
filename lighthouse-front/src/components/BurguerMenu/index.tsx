import React, { useState } from "react";
import styled, { css } from "styled-components";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={handleToggle}>
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  );
};

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

  ${Wrapper}:hover & {
    background-color: ${({ theme }) => theme.menuBarColor};
  }

  ${Wrapper}:hover:first-child & {
    transform: rotate(45deg) translate(2px, 2px);
  }

  ${Wrapper}:hover:nth-child(2) & {
    opacity: 0;
  }

  ${Wrapper}:hover:last-child & {
    transform: rotate(-45deg) translate(2px, -2px);
  }
`;

export default BurgerMenu;
