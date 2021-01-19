import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

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

// TO DO: criar menu hamburger pro mobile
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Option = styled.div`
  color: black;
  display: inline-block;
  padding: 1rem;
  position: relative;
`;

const Clickable = styled.a`
  color: #dfdad6;
  text-decoration: none;
  margin-right: 70px;
`;

function HeaderSection() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <MenuContainer>
          {/* <Option> */}
          <Clickable href="#">Home </Clickable>
          {/* </Option>
          <Option> */}
          <Clickable href="#">About Us</Clickable>
          <Clickable href="#">Services</Clickable>
          {/* </Option>
          <Option> */}
          <Clickable href="#">Testimony</Clickable>
          <Clickable href="#">Before & After</Clickable>
          {/* </Option> */}
        </MenuContainer>
      </Header>
    </>
  );
}

export default HeaderSection;
