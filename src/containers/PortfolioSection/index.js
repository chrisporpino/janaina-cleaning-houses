import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
// import "../../App.css";

import before1 from "../../assets/images/before01.png";
import after1 from "../../assets/images/after01.png";
import before2 from "../../assets/images/before02.png";
import after2 from "../../assets/images/after02.png";
import before3 from "../../assets/images/before03.png";
import after3 from "../../assets/images/after03.png";

import PicturesContainer from "../../components/PicturesContainer";

const Portfolio = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;

  font-family: Roboto;
  align-items: center;
  background: linear-gradient(180deg, #f3de52 0%, #f5df61 100%);
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: auto;
  }
`;

const PortifolioTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  margin-top: 100px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    margin-top: 40px;
    margin-bottom: 5px;
  }
`;

const Linha4 = styled.div`
  width: 140px;
  height: 0px;
  border-top: 4px solid #437ab6;

  margin-bottom: 61px;
`;

const ContainerPortifolio = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-evenly;

  @media (max-width: 700px) {
    width: 375px;

    margin-top: 31px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
`;

const PictureContainer = styled.div`
  display: flex;
  /* width: 405px;
  height: 235px; */
  padding: 20px;
`;

const PictureBefore = styled.div`
  width: 150px;
  height: 235px;
  background-image: url(${before2});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  border-right: 5px solid black;
`;

const PictureAfter = styled.div`
  width: 150px;
  height: 235px;
  background-image: url(${after1});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
`;

const PicturePortifolio = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Link = styled.a`
  width: 216px;
  height: 54px;
  /* radius: 30px; */
  background-color: rgba(255, 67, 1, 1) rgba(209, 54, 0, 1);
`;

const ServButton2 = styled.button`
  width: 216px;
  height: 54px;
  background: linear-gradient(180deg, #ff4301 0%, #d13600 100%);
  border-radius: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 1);
  border: none;
  margin-top: 65px;
  margin-bottom: 115px;

  @media (max-width: 700px) {
    top: 5000px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;

function PortfolioSection() {
  return (
    <Portfolio>
      <PortifolioTitle>Before and After</PortifolioTitle>
      <Linha4></Linha4>

      <ContainerPortifolio>
        <PicturesContainer imgBefore={before1} imgAfter={after1} />

        <PicturesContainer imgBefore={before2} imgAfter={after2} />

        <PicturesContainer imgBefore={before3} imgAfter={after3} />
      </ContainerPortifolio>

      <ServButton2>SCHEDULE YOUR TIME</ServButton2>
    </Portfolio>
  );
}

export default PortfolioSection;
