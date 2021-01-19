import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

import before1 from "../../assets/images/before01.png";
import after1 from "../../assets/images/after01.png";
import before2 from "../../assets/images/before02.png";
import after2 from "../../assets/images/after02.png";
import before3 from "../../assets/images/before03.png";
import after3 from "../../assets/images/after03.png";

import PicturesContainer from "../../components/PicturesContainer";

// Margin do portifolio so vou conseguir fazer quando o chris terminar, pois somente tenho acesso a dois sets

const Portfolio = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 596px;
  margin: 0 auto;
  font-family: Roboto;
  align-items: center;
  background: linear-gradient(180deg, #f3de52 0%, #f5df61 100%);
`;

const PortifolioTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  margin: 50px 631px 71px 632px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
`;

const ContainerPortifolio = styled.div`
  display: flex;
  align-items: center;
  height: 800px;
  width: 100%;
  justify-content: space-evenly;

  /* margin: ; */
`;

const PictureContainer = styled.div`
  display: flex;
  width: 405px;
  height: 426px;
  padding: 12px;
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

function PortfolioSection() {
  return (
    <Portfolio>
      <PortifolioTitle>Before and After</PortifolioTitle>

      <ContainerPortifolio>
        <PicturesContainer imgBefore={before1} imgAfter={after1} />

        <PicturesContainer imgBefore={before2} imgAfter={after2} />

        <PicturesContainer imgBefore={before3} imgAfter={after3} />
      </ContainerPortifolio>
    </Portfolio>
  );
}

export default PortfolioSection;
