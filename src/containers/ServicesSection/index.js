import React from "react";
// import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";

const Services = styled.div`
  width: 100%;
  background-color: white;
`;

const ServicesTitle = styled.h2`
  text-align: center;
  height: 28px;
  padding: 81px 673px 54px 673px;
`;

const ServGeral = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ServiceBox = styled.div`
  width: 351px;
  height: 263px;
  background-color: #3ab3b2;
`;

const ServiceBoxImage = styled.img`
  width: 314px;
  height: 129px;
  margin: 14px 18px 7px 19px;
`;

const ServiceBoxTitle = styled.h4`
  width: 155px;
  height: 19px;
  margin: 0px 178px 12px 18px;
`;

const ServiceBoxParagraph = styled.p`
  width: 314px;
  height: 32px;
  margin: 0px 19px 50px 18px;
`;

const ServButton = styled.button`
  display: inline-block;
  position: absolute;
  width: 204px;
  height: 55px;
  top: 1890px;
  left: 650px;
  border-radius: 5px;
`;

function ServicesSection() {
  return (
    <Services>
      <ServicesTitle>SERVICES</ServicesTitle>

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
