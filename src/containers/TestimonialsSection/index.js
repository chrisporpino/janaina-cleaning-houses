import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

const Testimonials = styled.div`
  width: 100%;
  height: 531px;
  padding-top: 180px;
  background: linear-gradient(180deg, #f1dd3e 0%, #f3de52 100%);
  font-family: Roboto;
`;

const TestimonialsH2 = styled.h2`
  text-align: center;
  margin: 100px 663px 96px 664px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
`;

const TestimonalsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
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
      <TestimonialsH2>Testimonials</TestimonialsH2>

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
