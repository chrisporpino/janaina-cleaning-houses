import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";
import logo from "../../assets/images/logo.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/Insta.png";

const FooterF = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  height: 294px;
  background-color: #171604;
  color: white;
  /* padding: 10px 10px; */
  font-family: "Nerko One", cursive;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* margin: 70px 720px 15px 727px; */
  /* Eu tive que mudar um pouco as margens esq e dir pra centralisar*/
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const FooterParagraph = styled.li`
  list-style-type: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const ContactContainer = styled.div`
  width: 177px;
  height: 127px;
`;

const FooterLogo = styled.div`
  background-image: url(${logo});
  width: 270px;
  height: 200px;
  background-repeat: no-repeat;
`;

// const logo = styled.img`
//   width: 100%;
//   height: 100%;
// `;

const FooterSocial = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  margin-top: 52px;
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

const FooterSignature = styled.p`
  /* margin: 34px 536px 20px; */
  font-family: Roboto;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: rgba(185, 175, 168, 1);
`;

function Footer() {
  return (
    <FooterF>
      <FooterContainer>
        <FooterLogo></FooterLogo>

        <FooterMenu>
          {/* Tive que usar FooterF porque estava conflitando com a function  */}
          <FooterTitle>PAGES</FooterTitle>
          <FooterParagraph>Home</FooterParagraph>
          <FooterParagraph>About us</FooterParagraph>
          <FooterParagraph>Services</FooterParagraph>
          <FooterParagraph>Before and After</FooterParagraph>
        </FooterMenu>

        <ContactContainer>
          <ContactTitle>Contact</ContactTitle>

          <Contacts>Janaina.050912@gmail.com </Contacts>
          <FooterSocial src={insta} src={face}></FooterSocial>
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
