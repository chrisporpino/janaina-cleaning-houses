import React from "react";
import styled from "styled-components";
import background from "../../assets/images/background.png";
import locationIcon from "../../assets/images/icons/location.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

const SectionHome = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 522px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${background}),
    linear-gradient(180deg, #f5df61 2.97%, #ebda08 96.84%);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    height: 468px;
  }
`;

const WhatsappButton = styled.div`
  width: 193px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 20px;
  background: linear-gradient(180deg, #6c95ff 0%, #437ab6 100%);
  border-radius: 20px;

  position: relative;
  left: 500px;
  top: 20px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;

  @media (max-width: 700px) {
    position: absolute;
    /* left: 0; */
    /* top: 20px; */
  }
`;

const TitleHome = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 110%;

  margin: 96px 0 20px 0;
  color: #000000;
`;

const Paragraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
`;

const FormContainer = styled.div`
  width: 576px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(16, 13, 8, 0.6);
  /* opacity: 0.6; */

  padding: 28px;
  border-radius: 20px;
  margin: 30px 0 66px 0;
  padding: 15px 0;

  @media (max-width: 700px) {
    width: 246px;
    height: 193px;
    padding: 20px;
  }
`;

const Form = styled.form`
  @media (max-width: 700px) {
    width: 100%;
    height: 193px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const InputName = styled.input`
  width: 150px;
  height: 46px;
  background: #ffffff;
  border-radius: 30px;
  border: none;
  margin: 0 5px;
  padding: 10px 15px;

  @media (max-width: 700px) {
    width: 100%;
    height: 42px;
    margin: 0;
  }
`;

const InputPhone = styled.input`
  width: 150px;
  height: 46px;
  background: #ffffff;
  border-radius: 30px;
  border: none;
  margin: 0 5px;
  padding: 10px 15px;

  @media (max-width: 700px) {
    width: 100%;
    height: 42px;
    margin: 0;
  }
`;

const SubmitHome = styled.input`
  width: 216px;
  height: 46px;
  border-radius: 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  background: linear-gradient(180deg, #ff4301 0%, #d13600 100%);
  border-radius: 30px;
  border: none;
  margin: 0 5px;

  @media (max-width: 700px) {
    width: 100%;
    height: 44px;
    margin: 0;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
`;

const Icon = styled.img`
  width: 22px;
`;

function HomeSection() {
  return (
    <>
      <SectionHome>
        <WhatsappButton>
          <Icon src={whatsappIcon}></Icon>
          <p>+1 647 901 3942</p>
        </WhatsappButton>
        <TitleHome>Janaina's</TitleHome>
        <Paragraph>Cleaning Services</Paragraph>

        <FormContainer>
          <Form>
            <InputName type="text" name="firstname" placeholder="Name" />

            <InputPhone type="tel" name="phone" placeholder="Phone" />

            <SubmitHome type="submit" value="SCHEDULE YOUR TIME" />
          </Form>
        </FormContainer>

        <LocationContainer>
          <Icon src={locationIcon}></Icon>
          <p>TORONTO - CA</p>
        </LocationContainer>
      </SectionHome>
    </>
  );
}

export default HomeSection;
