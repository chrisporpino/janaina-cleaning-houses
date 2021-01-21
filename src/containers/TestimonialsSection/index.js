import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

const Testimonials = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 531px;
  background: linear-gradient(180deg, #f1dd3e 0%, #f3de52 100%);
  font-family: Roboto;
`;

const TestimonialsH2 = styled.h2`
  text-align: center;
  font-style: normal;
  /* margin: 50px 663px 120px 664px; */
  margin-top: 50px;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
`;

const Linha3 = styled.div`
  width: 140px;
  height: 0px;
  border: 2px solid #437ab6;
  transform: rotate(-180deg);
  margin-bottom: 50px;
  margin-left: 650px;
  margin-top: 10px;
  margin-bottom: 120px;
`;

const TestimonalsBox = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 676px;
  }
`;

const TestBox = styled.div`
  width: 290px;
  height: 300px;
  border-radius: 20px;
  background-color: #3ab3b2;
  text-align: center;
  background-color: rgba(61, 56, 17, 1);
  color: white;
`;

const TestBoxJonathan = styled.div`
  width: 290px;
  height: 180px;
  border-radius: 20px;
  background-color: #3ab3b2;
  text-align: center;
  margin-top: 26px;
  background-color: rgba(61, 56, 17, 1);
`;

const TestBoxTitle = styled.h3`
  padding: 20px 99px 15px 99px;
  align-items: center;
  font-weight: 700px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(223, 218, 214, 1);
`;

const TestBoxParagraph = styled.p`
  margin: 0px 30px 20px 30px;
  font-weight: 400px;
  font-style: normal;
  font-size: 16px;
  line-height: 25.6px;
  align-content: center;
  color: rgba(255, 255, 255, 1);
`;

const TestBoxSubTitle = styled.b``;

function TestimonialsSection() {
  return (
    <Testimonials>
      <TestimonialsH2>Testimony</TestimonialsH2>
      <Linha3></Linha3>

      <TestimonalsBox>
        <TestBox>
          <TestBoxTitle>Lelo Texeira</TestBoxTitle>
          <TestBoxParagraph>
            <br />
            We hired Cleaning Houses to clean our 3 bedrooms house and they did
            a great job. If you are looking for a detailing cleaning we
            recommend. Great job girls.
          </TestBoxParagraph>
        </TestBox>

        <TestBoxJonathan>
          <TestBoxTitle>Jonathan</TestBoxTitle>
          <TestBoxParagraph>
            <br />
            great, thank you! I will have it again in a couple of weeks.
          </TestBoxParagraph>
        </TestBoxJonathan>

        <TestBox>
          <TestBoxTitle>Ken</TestBoxTitle>
          <TestBoxParagraph>
            <br />
            Janaina! The place looks fantastic. It’s everything I could ask for.
            They did an outstanding job today!
          </TestBoxParagraph>
        </TestBox>
      </TestimonalsBox>
    </Testimonials>
  );
}

export default TestimonialsSection;
