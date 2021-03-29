import React from "react";
// import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";
import servImg01 from "../../assets/images/1.png";
import servImg02 from "../../assets/images/2.png";
import servImg03 from "../../assets/images/3.png";
import servImg04 from "../../assets/images/4.png";
import servImg05 from "../../assets/images/5.png";

const Services = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 1022;
  background: linear-gradient(180deg, #eddb19 0%, #f1dd3e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: auto;
  }
`;

const ServiceHolder = styled.div`
  width: 1200px;
  height: auto;
  justify-items: center;

  @media (max-width: 700px) {
    width: 375px;
    margin-top: 80px;
  }
`;

const ServicesTitle = styled.h2`
  text-align: center;
  height: 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  margin-top: 92px;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    width: 375px;
    margin-top: 80px;
    margin-bottom: 5px;
  }
`;

const Linha2 = styled.div`
  width: 140px;
  height: 0px;
  border-top: 4px solid #437ab6;
  transform: rotate(-180deg);
  margin-bottom: 60px;

  @media (max-width: 700px) {
    margin-bottom: 30px;
  }
`;

const ServGeral = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 700px) {
    width: 375px;
    height: auto;
  }
`;

const ServGeral2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 800px;
  height: auto;
  @media (max-width: 700px) {
    width: 375px;
    height: auto;
  }
`;

const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 370px;
  height: 331px;
  background-color: rgba(18, 17, 3, 1);
  margin-top: 70px;
  border-radius: 10px;
  flex-shrink: 0;
  @media (max-width: 700px) {
    margin-top: 30px;
  }
`;

const ServiceBoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 15px 54px 15px;
`;

const ServiceBoxImage = styled.img`
  width: 340px;
  height: 130px;
  border-radius: 5px;
`;

const ServiceBoxTitle = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: rgba(255, 255, 255, 1);
  padding-bottom: 15px;
`;

const ServiceBoxParagraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(223, 218, 214, 1);
`;

const ServButton = styled.button`
  width: 216px;
  height: 54px;
  background: linear-gradient(180deg, #ff4301 0%, #d13600 100%);
  border-radius: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 1);
  border: none;
  margin-top: 50px;
  @media (max-width: 700px) {
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;

function ServicesSection() {
  return (
    <Services id="services">
      <ServicesTitle>Services</ServicesTitle>
      <Linha2></Linha2>

      <ServiceHolder>
        <ServGeral>
          <ServiceBox>
            <ServiceBoxImage src={servImg01} alt="" />
            <ServiceBoxText>
              <ServiceBoxTitle>House or Apartment</ServiceBoxTitle>
              <ServiceBoxParagraph>
                With thorough cleaning, your home will also create a safe, clean
                and comfortable environment for you and your family.
              </ServiceBoxParagraph>
            </ServiceBoxText>
          </ServiceBox>

          <ServiceBox>
            <ServiceBoxImage src={servImg02} alt="" />
            <ServiceBoxText>
              <ServiceBoxTitle>Office</ServiceBoxTitle>
              <ServiceBoxParagraph>
                We provides a wide variety of general office cleaning and highly
                customized solutions for your work environment.
              </ServiceBoxParagraph>
            </ServiceBoxText>
          </ServiceBox>

          <ServiceBox>
            <ServiceBoxImage src={servImg03} alt="" />
            <ServiceBoxText>
              <ServiceBoxTitle>Deep clean </ServiceBoxTitle>
              <ServiceBoxParagraph>
                I perform a deep, quick and efficient cleaning that meets your
                needs, with a super affordable price.
              </ServiceBoxParagraph>
            </ServiceBoxText>
          </ServiceBox>
        </ServGeral>
        <ServGeral2>
          <ServiceBox>
            <ServiceBoxImage src={servImg04} alt="" />
            <ServiceBoxText>
              <ServiceBoxTitle>Move In or Out Cleaning</ServiceBoxTitle>
              <ServiceBoxParagraph>
                I perform a complete, quick and efficient cleaning that meets
                your needs.
              </ServiceBoxParagraph>
            </ServiceBoxText>
          </ServiceBox>

          <ServiceBox>
            <ServiceBoxImage src={servImg05} alt="" />
            <ServiceBoxText>
              <ServiceBoxTitle>
                cleaning Weekly, Biweekly, Monthly{" "}
              </ServiceBoxTitle>
              <ServiceBoxParagraph>
                Hire our service constantly to ensure the cleanliness,
                organization and comfort of your home or business.
              </ServiceBoxParagraph>
            </ServiceBoxText>
          </ServiceBox>
        </ServGeral2>
      </ServiceHolder>

      <ServButton>SCHEDULE YOUR TIME</ServButton>
    </Services>
  );
}

export default ServicesSection;
