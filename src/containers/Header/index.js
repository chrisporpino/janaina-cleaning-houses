import React from "react";
import styled from "styled-components";
import logo from '../../assets/images/logo.png'

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
`;

const Logo = styled.img`
  width: 135px;
  height: 101px;
  margin: 5px 0 5px 70px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

const Option = styled.div`
  color: black;
  display: inline-block;
  padding: 1rem;
  position: relative;
`;

const Clickable = styled.a`
  color: #DFDAD6;
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
