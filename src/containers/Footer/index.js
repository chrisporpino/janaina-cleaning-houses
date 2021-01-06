import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

const FooterF = styled.footer`
  width: 100%;
  height: 80px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  font-family: "Nerko One", cursive;
`;

const FooterTitle = styled.title``;

const FooterParagraph = styled.p``;

function Footer() {
  return (
    <FooterF>
      {/* Tive que usar FooterF porque estava conflitando com a function  */}
      <FooterTitle>Pay us a Visit</FooterTitle>

      <FooterParagraph>
        Design by Caroline Marçal, Victor Tarroni and Christhopher Porpino.
      </FooterParagraph>
    </FooterF>
  );
}

export default Footer;
