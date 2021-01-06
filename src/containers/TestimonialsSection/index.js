import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

const Testimonials = styled.div`
  width: 100%;
  height: auto;
  padding-top: 180px;
`;

const TestimonialsH2 = styled.h2`
  text-align: center;
  padding: 320px 648px 68px 649px;
`;

const TestimonalsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TestBox = styled.div`
  width: 360px;
  height: 236px;
  border-radius: 5px;
  background-color: #3ab3b2;
  text-align: center;
`;

const TestBoxTitle = styled.h3`
  padding: 25px 125px 19px 126px;
`;

const TestBoxParagraph = styled.p`
  padding: 0px 25px 25px 25px;
`;

const TestBoxSubTitle = styled.b``;

function TestimonialsSection() {
  return (
    <Testimonials>
      <TestimonialsH2>TESTIMONIALS</TestimonialsH2>

      <TestimonalsBox>
        <TestBox>
          <TestBoxTitle>Joao</TestBoxTitle>
          <TestBoxParagraph>
            <TestBoxSubTitle>Toronto - Canada</TestBoxSubTitle>
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur quidem, quasi optio eveniet, dolores inventore
            veritatis ex ut ipsum quae aliquid incidunt cumque distinctio? Unde?
          </TestBoxParagraph>
        </TestBox>

        <TestBox>
          <TestBoxTitle>Joao</TestBoxTitle>
          <TestBoxParagraph>
            <TestBoxSubTitle>Toronto - Canada</TestBoxSubTitle>
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur quidem, quasi optio eveniet, dolores inventore
            veritatis ex ut ipsum quae aliquid incidunt cumque distinctio? Unde?
          </TestBoxParagraph>
        </TestBox>

        <TestBox>
          <TestBoxTitle>Joao</TestBoxTitle>
          <TestBoxParagraph>
            <TestBoxSubTitle>Toronto - Canada</TestBoxSubTitle>
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur quidem, quasi optio eveniet, dolores inventore
            veritatis ex ut ipsum quae aliquid incidunt cumque distinctio? Unde?
          </TestBoxParagraph>
        </TestBox>
      </TestimonalsBox>
    </Testimonials>
  );
}

export default TestimonialsSection;
