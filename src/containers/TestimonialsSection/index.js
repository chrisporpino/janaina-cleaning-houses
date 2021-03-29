import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";

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

const TestimonalsHolder = styled.div`
  display: inline;
  width: 720px;
  height: auto;

  @media (max-width: 700px) {
    width: auto;
    height: auto;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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
  /* height: 300px; */
  height: 235px;
  border-radius: 20px;
  background-color: #3ab3b2;
  text-align: center;
  background-color: rgba(61, 56, 17, 1);
  color: white;
`;

const TestBoxJonathan = styled.div`
  width: 290px;
  height: 131px;
  border-radius: 20px;
  background-color: #3ab3b2;
  text-align: center;
  margin-top: 26px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: rgba(61, 56, 17, 1);

  @media (max-width: 700px) {
    margin-bottom: 30px;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const TestBoxTitle = styled.h3`
  width: 92px;
  height: 24px;
  margin: 20px 90px 0px 90px;
  font-family: Roboto;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(223, 218, 214, 1);
`;

const TestBoxParagraph = styled.p`
  margin: 0px 30px 20px 30px;
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
      <TestimonalsHolder>
        <TestimonalsBox>
          <TestBox>
            <TestBoxTitle>Lelo Texeira</TestBoxTitle>
            <TestBoxParagraph>
              <br />
              We hired Cleaning Houses to clean our 3 bedrooms house and they
              did a great job. If you are looking for a detailing cleaning we
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
              Janaina! The place looks fantastic. It’s everything I could ask
              for. They did an outstanding job today!
            </TestBoxParagraph>
          </TestBox>
        </TestimonalsBox>
      </TestimonalsHolder>
      <TestimonyButton>See all testimonials</TestimonyButton>
    </Testimonials>
  );
}

export default TestimonialsSection;
