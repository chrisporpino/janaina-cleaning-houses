import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";
import logo from "../../assets/images/logo.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/Insta.png";
import whats from "../../assets/images/icons/whatsapp.png";
import emailvector from "../../assets/images/icons/Emailvector.png";

const FooterF = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: 294px;
  width: 100%;
  background-color: #171604;
  color: white;
  font-family: Roboto;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const FooterLogo = styled.img`
  width: 119px;
  height: 89px;
  margin-top: 33px;

  @media (max-width: 700px) {
    margin-top: 40px;
  }
`;

const FooterMenu = styled.div`
  width: 88px;
  height: 154px;
  display: flex;
  font-family: Roboto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 70px 150px 34px;
`;

const UnderLinha = styled.div`
  width: 60px;
  height: 0px;
  border-top: 1px solid #437ab6;
  margin-top: 5px;
  margin-bottom: 11px;

  @media (max-width: 700px) {
    width: 34px;
  }
`;

const FooterTitle = styled.li`
  list-style-type: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
`;

const FooterParagraph = styled.li`
  list-style-type: none;

  font-style: normal;
  font-family: Roboto;
  font-weight: 700px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 700px) {
    font-weight: bold;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 81px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
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
  text-align: center;
  margin-top: 14px;
`;

const EmailHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    margin-bottom: 17.49px;
  }
`;

const Contacts = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
`;

const ContactPhoneHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    margin-bottom: 17.49px;
  }
`;

const ContactPhone = styled.p`
  display: none;

  @media (max-width: 700px) {
    display: inline;
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }
`;

const FooterSocial = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  margin-top: 52px;

  @media (max-width: 700px) {
    margin-top: 17px;
    margin-bottom: 81.5px;
  }
`;

const FooterSignature = styled.p`
  font-family: Roboto;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: rgba(185, 175, 168, 1);
  margin-bottom: 20px;

  @media (max-width: 700px) {
    height: 32px;
    width: 238px;
    text-justify: center;
    margin-bottom: 14px;
  }
`;

const ImgSocial = styled.img`
  height: 21px;
  width: 21.16px;
  margin-right: 20.99px;
`;

const PhoneSymbol = styled.img`
  display: none;

  @media (max-width: 700px) {
    display: inline;
    height: 17.5px;
    width: 17.5px;
    margin-right: 5.83px;
  }
`;

const EmailSymbol = styled.img`
  height: 13.33px;
  width: 13.33px;
  margin-right: 8.33px;
`;

function Footer() {
  return (
    <FooterF>
      <FooterContainer>
        <FooterLogo src={logo}></FooterLogo>

        <FooterMenu>
          {/* Tive que usar FooterF porque estava conflitando com a function  */}
          <FooterTitle>PAGES</FooterTitle>
          <UnderLinha></UnderLinha>

          <FooterParagraph>Home</FooterParagraph>
          <FooterParagraph>About us</FooterParagraph>
          <FooterParagraph>Services</FooterParagraph>
          <FooterParagraph>Before and After</FooterParagraph>
        </FooterMenu>

        <ContactContainer>
          <ContactTitle>CONTACT</ContactTitle>
          <UnderLinha></UnderLinha>

          <EmailHold>
            <EmailSymbol src={emailvector}></EmailSymbol>
            <Contacts>Janaina.050912@gmail.com </Contacts>
          </EmailHold>

          <ContactPhoneHold>
            <PhoneSymbol src={whats}></PhoneSymbol>
            <ContactPhone> +1 647 901 3942</ContactPhone>
          </ContactPhoneHold>
          <FooterSocial>
            <ImgSocial src={insta}></ImgSocial>
            <ImgSocial src={face}></ImgSocial>
          </FooterSocial>
        </ContactContainer>
      </FooterContainer>

      <FooterSignature>
        Designed by Caroline Marçal, Developed by Christhopher Porpino and
        Victor Tarroni
      </FooterSignature>
    </FooterF>
  );
}

export default Footer;
