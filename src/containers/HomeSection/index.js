import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";

const SectionHome = styled.section`
  width: 100%;
  height: 522px;
  place-items: center;
  background-color: teal;
`;

const TitleHome = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  line-height: 46.88px;
  align-items: center;
  width: 296px;
  height: 47px;
  top: 230px; /* OBS chumbar a posição do elemento não é uma boa prática */
  left: 588px; /* OBS chumbar a posição do elemento não é uma boa prática */
  margin: 141px 556px 29px 588px;
  color: #000000;
`;

const Paragraph = styled.p`
  width: 553px;
  height: 23px;
  top: 306px; /* OBS chumbar a posição do elemento não é uma boa prática */
  left: 460px; /* OBS chumbar a posição do elemento não é uma boa prática */
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
  align-items: center;
  margin: 0px 427px 29px 460px;
`;

const FormContainer = styled.div`
  width: 684px;
  height: 111px;
  top: 358px;
  left: 378px;
  background-color: #e6e6e6;
  padding: 28px;
  margin: 0px 378px 142px 378px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const InputName = styled.input`
  width: 195px;
  height: 55px;
  top: 386px;
  left: 406px;
  border-radius: 5px;
  align-items: center;
  border: 1px solid #4b4b4b;
  margin-right: 15px;
`;

const InputPhone = styled.input`
  width: 195px;
  height: 55px;
  top: 386px;
  left: 618px;
  border-radius: 5px;
  border: 1px solid #4b4b4b;
  margin-right: 15px;
`;

const SubmitHome = styled.input`
  width: 180px;
  height: 55px;
  top: 386px;
  left: 830px;
  border-radius: 5px;
`;

function HomeSection() {
  return (
    <div>
      <SectionHome>
        <TitleHome>Cleaning House</TitleHome>
        <Paragraph>
          We are professional home and office cleaners and offer a variaety of
          cleaning services.
        </Paragraph>

        <FormContainer>
          <Form>
            <InputName type="text" name="firstname" placeholder="name" />

            <InputPhone type="tel" name="phone" placeholder="phone." />

            <SubmitHome type="submit" value="Make a booking" />
          </Form>
        </FormContainer>
      </SectionHome>
    </div>
  );
}

export default HomeSection;
