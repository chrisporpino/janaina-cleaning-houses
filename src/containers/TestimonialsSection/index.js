import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";

const Testimonials = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  height: 750px;
  background: linear-gradient(180deg, #f1dd3e 0%, #f3de52 100%);
  font-family: Roboto;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: 950px;
  }
`;

const TestimonialsH2 = styled.h2`
  font-family: Roboto;
  text-align: center;
  font-style: normal;
  margin-top: 100px;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  @media (max-width: 700px) {
    margin-top: 0px;
  }
`;

const Linha3 = styled.div`
  width: 140px;
  height: 0px;
  border-top: 4px solid #437ab6;
  margin-top: 10px;
`;

const TestimonalsBox = styled.div`
  width: 66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 375px;
    margin-top: 35px;
  }
`;

const TestBox = styled.div`
  width: 290px;
  border-radius: 20px;
  background-color: #3ab3b2;
  background-color: rgba(61, 56, 17, 1);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 3px solid white;
`;

const TestBoxTitle = styled.h3`
  width: 100%;
  font-family: Roboto;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(223, 218, 214, 1);
  margin-bottom: 15px;
`;

const TestBoxParagraph = styled.p`
  width: 80%;
  font-weight: normal;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 22.4px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

const TestimonyButton = styled.button`
  height: 40px;
  width: 196px;
  background: #ffffff;
  border: 1px solid #3d3811;
  box-sizing: border-box;
  border-radius: 20px;
  margin-top: 102px;

  @media (max-width: 700px) {
    width: 180px;
    height: 32px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

function TestimonialsSection() {
  return (
    <Testimonials>
      <TestimonialsH2>Testimony</TestimonialsH2>
      <Linha3></Linha3>

      <TestimonalsBox>
        <TestBox>
          <TestBoxTitle>Lelo Texeira</TestBoxTitle>
          <TestBoxParagraph>
            We hired Cleaning Houses to clean our 3 bedrooms house and they did
            a great job. If you are looking for a detailing cleaning we
            recommend. Great job girls.
          </TestBoxParagraph>
        </TestBox>

        <TestBox>
          <TestBoxTitle>Jonathan</TestBoxTitle>
          <TestBoxParagraph>
            great, thank you! I will have it again in a couple of weeks.
          </TestBoxParagraph>
        </TestBox>

        <TestBox>
          <TestBoxTitle>Ken</TestBoxTitle>
          <TestBoxParagraph>
            Janaina! The place looks fantastic. It’s everything I could ask for.
            They did an outstanding job today!
          </TestBoxParagraph>
        </TestBox>
      </TestimonalsBox>

      <TestimonyButton>See all testimonials</TestimonyButton>
    </Testimonials>
  );
}

export default TestimonialsSection;
