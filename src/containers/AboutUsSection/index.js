import React from "react";
import styled from "styled-components";
import aboutUsImage from "../../assets/images/about-us-section.png";

const AboutUs = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 496px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 10px;

  background: linear-gradient(180deg, #ebda08 0%, #eddb19 100%);
`;

const AboutUsTitle = styled.h2`
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
`;

const Linha = styled.div`
  width: 140px;
  height: 0px;
  border: 2px solid #437ab6;
  transform: rotate(-180deg);
  margin-bottom: 10px;
`;

const Informations = styled.div`
  display: flex;
  align-items: center;
  width: 760px;
  justify-content: space-between;
  margin: 50px 321px 92px 335px; /* OBS em vez de chumbar margens, 
  a boa prática é usar comandos de alinhamento para centralizar */
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
`;

const Paragraph = styled.p`
  width: 370px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #100d08;
`;

function AboutUsSection() {
  return (
    <>
      <AboutUs>
        <AboutUsTitle>About Us</AboutUsTitle>
        <Linha></Linha>
        <div>
          <Informations>
            <Image/>
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
