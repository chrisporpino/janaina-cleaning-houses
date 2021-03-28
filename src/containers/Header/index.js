import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import TemporaryDrawer from "../../components/TemporaryDrawer";

const Header = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 111px;
  background: #171604;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 135px;
  height: 101px;
  margin: 5px 0 5px 70px;

  @media (max-width: 700px) {
    text-align: center;
    width: 119px;
    height: 89px;
    margin: 0;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Clickable = styled.a`
  color: #dfdad6;
  text-decoration: none;
  margin-right: 70px;

  @media (max-width: 700px) {
    margin-right: auto;
  }
`;

function HeaderSection() {
  return (
    <>
      <Header>
        <TemporaryDrawer />
        <Logo src={logo} alt="logo" />
        <MenuContainer>
          <Clickable href="#home">Home </Clickable>
          <Clickable href="#about-us">About Us</Clickable>
          <Clickable href="#services">Services</Clickable>
          <Clickable href="#testimonials">Testimony</Clickable>
          <Clickable href="#portfolio">Before & After</Clickable>
        </MenuContainer>
      </Header>
    </>
  );
}

export default HeaderSection;
