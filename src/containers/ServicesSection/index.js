import React from "react";
// import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";

const Services = styled.div`
  width: 100%;
  height: 1022px;
  background: linear-gradient(180deg, #eddb19 0%, #f1dd3e 100%);
`;

const ServicesTitle = styled.h2`
  text-align: center;
  height: 28px;
  /* padding: 81px 673px 54px 673px; */
  margin: 50px 674px 40px 674px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
`;

const ServGeral = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ServiceBox = styled.div`
  width: 370px;
  height: 331px;
  background-color: rgba(18, 17, 3, 1);
  margin-bottom: 50px;
  border-radius: 10px;
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

function ServicesSection() {
  return (
    <Services>
      <ServicesTitle>Services</ServicesTitle>

      <ServGeral>
        <ServiceBox>
          <ServiceBoxImage
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ServiceBoxTitle>Office cleaning</ServiceBoxTitle>
          <ServiceBoxParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            accusantium debitis doloribus, repellendus quas ut.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ServiceBoxTitle>Home cleaning</ServiceBoxTitle>
          <ServiceBoxParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            accusantium debitis doloribus, repellendus quas ut.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage
            src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWV8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ServiceBoxTitle>Flat cleaning</ServiceBoxTitle>
          <ServiceBoxParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            accusantium debitis doloribus, repellendus quas ut.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ServiceBoxTitle>Flat cleaning</ServiceBoxTitle>
          <ServiceBoxParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            accusantium debitis doloribus, repellendus quas ut.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxImage
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ServiceBoxTitle>Flat cleaning</ServiceBoxTitle>
          <ServiceBoxParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            accusantium debitis doloribus, repellendus quas ut.
          </ServiceBoxParagraph>
        </ServiceBox>

        <ServButton>Book your cleaning</ServButton>
      </ServGeral>
    </Services>
  );
}

export default ServicesSection;
