import React from "react";
import styled from "styled-components";
import aboutUsImage from "../../assets/images/about-us-section.png";

const AboutUs = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 496px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 10px;

  background: linear-gradient(180deg, #ebda08 0%, #eddb19 100%);

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    height: 617px;

    padding-top: 78px;
    padding-bottom: 40px;
  }
`;

const AboutUsTitle = styled.h2`
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Underline = styled.div`
  width: 140px;
  height: 0px;
  border-top: 4px solid #437ab6;
  transform: rotate(-180deg);
  margin-bottom: 10px;

  @media (max-width: 700px) {
    width: 105px;
    border-top: 4px solid #437ab6;
    margin-bottom: 30px;
  }
`;

const Informations = styled.div`
  display: flex;
  align-items: center;
  width: 760px;
  justify-content: space-between;
  /* margin: 50px 321px 92px 335px; /* OBS em vez de chumbar margens, 
  a boa prática é usar comandos de alinhamento para centralizar */

  @media (max-width: 700px) {
    width: auto;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
`;

const Image = styled.div`
  width: 370px;
  height: 240px;
  border-radius: 20px;
  margin-right: 30px;

  background-image: url(${aboutUsImage});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    width: 345px;
    height: 227px;
    margin: 0 0 15px 0;
  }
`;

const Paragraph = styled.p`
  width: 370px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #100d08;

  @media (max-width: 700px) {
    width: 345px;
    height: 198px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;

    color: #100d08;
  }
`;

function AboutUsSection() {
  return (
    <>
      <AboutUs id="about-us">
        <AboutUsTitle>About Us</AboutUsTitle>
        <Underline></Underline>
        <div>
          <Informations>
            <Image />
            <div>
              <Paragraph>
                We are independent ladies we have good references. Your house is
                cleaned the way you want, consistently and meticulously whenever
                we visit it, this is our guarantee!
                <br />
                <br />
                Weekly, biweekly, monthly. Move in / out clean.
                <br />
                <br />
                We work with real estate agents to create the perfect salable
                home for you and your clients.
              </Paragraph>
            </div>
          </Informations>
        </div>
      </AboutUs>
    </>
  );
}

export default AboutUsSection;
