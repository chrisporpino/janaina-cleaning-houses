import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";

const Header = styled.header`
  width: 100%;
  height: 89px;
  background-color: #3ab3b2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
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
  color: black;
  text-decoration: none;
`;

function HeaderSection() {
  return (
    <div>
      <Header>
        <h1>Logo</h1>
        <MenuContainer>
          <Option>
            <Clickable href="#">HOME </Clickable>
          </Option>
          <Option>
            <Clickable href="#">SERVICES</Clickable>
          </Option>
          <Option>
            <Clickable href="#"> TESTIMONIALS </Clickable>
          </Option>
        </MenuContainer>
      </Header>
    </div>
  );
}

export default HeaderSection;
