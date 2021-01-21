import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/Insta.png";

const FooterF = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;

  background-color: #171604;
  color: white;

  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    width: 375px;
  }
`;

const FooterLogo = styled.div`
  background-image: url(${logo});
  width: 280px;
  height: 200px;
  background-repeat: no-repeat;
`;

const FooterMenu = styled.div`
  width: 88px;
  height: 154px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 70px 150px 34px;
`;

const FooterTitle = styled.li`
  list-style-type: none;
  font-family: Roboto;
  font-weight: 700px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const FooterParagraph = styled.li`
  list-style-type: none;
  font-family: Roboton;
  font-weight: 700px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 177px;
  height: 127px;
`;

const ContactTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
`;

const Contacts = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
`;

const FooterSocial = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  margin-top: 52px;
`;

const FooterSignature = styled.p`
  font-family: Roboto;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: rgba(185, 175, 168, 1);
`;

const ImgSocial = styled.img`
  height: 21px;
  width: 21.16px;
`;

function Footer() {
  return (
    <>
      <FooterF>
        <FooterContainer>
          <FooterLogo></FooterLogo>

          <FooterMenu>
            <FooterTitle>PAGES</FooterTitle>
            <FooterParagraph>Home</FooterParagraph>
            <FooterParagraph>About us</FooterParagraph>
            <FooterParagraph>Services</FooterParagraph>
            <FooterParagraph>Before and After</FooterParagraph>
          </FooterMenu>

          <ContactContainer>
            <ContactTitle>Contact</ContactTitle>

            <Contacts>Janaina.050912@gmail.com </Contacts>
            <FooterSocial>
              <ImgSocial src={face}></ImgSocial>
              <ImgSocial src={insta}></ImgSocial>
            </FooterSocial>
          </ContactContainer>
        </FooterContainer>

        <FooterSignature>
          Designed by Caroline Marçal, Developed by Christhopher Porpino and
          Victor Tarroni
        </FooterSignature>
      </FooterF>
    </>
  );
}

export default Footer;
