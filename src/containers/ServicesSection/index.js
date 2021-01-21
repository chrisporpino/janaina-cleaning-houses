import React from "react";
// import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";
import servImg01 from "../../assets/images/1.png";
import servImg02 from "../../assets/images/2.png";
import servImg03 from "../../assets/images/3.png";
import servImg04 from "../../assets/images/4.png";
import servImg05 from "../../assets/images/5.png";

const Services = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 1022px;
  background: linear-gradient(180deg, #eddb19 0%, #f1dd3e 100%);
`;

const ServicesTitle = styled.h2`
  text-align: center;
  height: 28px;
  /* margin: 0px 674px 40px 674px; */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  margin-top: 103px;
`;

const Linha2 = styled.div`
  width: 140px;
  height: 0px;
  border: 2px solid #437ab6;
  transform: rotate(-180deg);
  margin-bottom: 50px;
  margin-left: 650px;
  margin-top: 10px;
`;

const ServGeral = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 700px) {
    width: 375px;
    height: 1743px;
  }
`;

const ServiceBox = styled.div`
  width: 370px;
  height: 331px;
  background-color: rgba(18, 17, 3, 1);
  margin-bottom: 50px;
  border-radius: 10px;
  flex-shrink: 0;
`;

const ServiceBoxImage = styled.img`
  width: 340px;
  height: 130px;
  margin: 14px 18px 7px 19px;
  border-radius: 5px;
`;

const ServiceBoxTitle = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: rgba(255, 255, 255, 1);
  margin: 15px 138px 0px 15px;
`;

const ServiceBoxParagraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin: 15px 15px 54px 15px;
  color: rgba(223, 218, 214, 1);
`;

const ServButton = styled.button`
  width: 216px;
  height: 54px;
  position: absolute;
  top: 2080px;
  background: linear-gradient(180deg, #ff4301 0%, #d13600 100%);
  border-radius: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 1);
  border: none;
`;

const DropDownButton = styled.button`
  background-color: rgba(18, 17, 3, 1);
  color: white;
  padding: 0px;
  font-size: 16px;
  border: none;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDowncontent = styled.div`
  display: none;
  position: absolute;
  background-color: blue;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(18, 17, 3, 1)
  z-index: 1;
`;

const DropDownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

function ServicesSection() {
  return (
    <Services>
      <ServicesTitle>Services</ServicesTitle>
      <Linha2></Linha2>

      <ServGeral>
        <ServiceBox>
          <ServiceBoxImage src={servImg01} alt="" />
          <ServiceBoxTitle>House or Apartment</ServiceBoxTitle>
          <ServiceBoxParagraph>
            With thorough cleaning, your home will also create a safe, clean and
            comfortable environment for you and your family.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage src={servImg02} alt="" />
          <ServiceBoxTitle>Office</ServiceBoxTitle>
          <ServiceBoxParagraph>
            We provides a wide variety of general office cleaning and highly
            customized solutions for your work environment.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage src={servImg03} alt="" />
          <ServiceBoxTitle>Deep clean </ServiceBoxTitle>
          <ServiceBoxParagraph>
            I perform a deep, quick and efficient cleaning that meets your
            needs, with a super affordable price.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage src={servImg04} alt="" />
          <ServiceBoxTitle>Move In or Out Cleaning</ServiceBoxTitle>
          <ServiceBoxParagraph>
            I perform a complete, quick and efficient cleaning that meets your
            needs.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage src={servImg05} alt="" />
          <ServiceBoxTitle>cleaning Weekly, Biweekly, Monthly </ServiceBoxTitle>
          <ServiceBoxParagraph>
            Hire our service constantly to ensure the cleanliness, organization
            and comfort of your home or business.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServButton>SCHEDULE YOUR TIME</ServButton>
      </ServGeral>
    </Services>
  );
}

export default ServicesSection;
