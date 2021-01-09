import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

import before1 from "../../assets/images/before.jpg";
// import before2 from
// import before2 from

import after1 from "../../assets/images/after.jpg";
// import after2 from
// import after3 from

const Portifolio = styled.div`
  width: 100%;
  height: 596px;
  margin: 0 auto;
  background-color: rgba(235, 218, 8, 1) rgba(245, 223, 97, 1);
  font-family: Roboto;
  align-items: center;
  background: linear-gradient(180deg, #f3de52 0%, #f5df61 100%);
`;

const PortifolioTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  margin: 242px 632px 70px 631px;
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
  margin: ;
`;

const PictureContainer = styled.div`
  display: flex;
  width: 405px;
  height: 426px;
  /* margin: 0px 40px 40px; */
  padding: 12px;
`;

const PictureBefore = styled.div`
  width: 150px;
  height: 235px;
  background-image: url(${before1});
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
  radius: 30px;
  background-color: rgba(255, 67, 1, 1) rgba(209, 54, 0, 1);
`;

const BeforeParagraph = styled.p`
  margin-top: 210px;
  font-weight: bold;
  color: white;
`;

const AfterParagraph = styled.p`
  margin-top: 210px;
  font-weight: bold;
  color: white;
`;

function PortfolioSection() {
  return (
    <Link>
      <PortifolioTitle>Before and After</PortifolioTitle>

      <ContainerPortifolio>
        <PictureContainer>
          <PictureBefore>
            <BeforeParagraph>Before</BeforeParagraph>
          </PictureBefore>
          <PictureAfter>
            <AfterParagraph>After</AfterParagraph>
          </PictureAfter>
        </PictureContainer>

        <PictureContainer>
          <PictureBefore>
            <BeforeParagraph>Before</BeforeParagraph>
          </PictureBefore>
          <PictureAfter>
            <AfterParagraph>After</AfterParagraph>
          </PictureAfter>
        </PictureContainer>
        <PictureContainer>
          <PictureBefore>
            <BeforeParagraph>Before</BeforeParagraph>
          </PictureBefore>

          <PictureAfter>
            <AfterParagraph>After</AfterParagraph>
          </PictureAfter>
        </PictureContainer>
      </ContainerPortifolio>

      <Link to="/">Schedule Your Time</Link>
    </Link>
  );
}

export default PortfolioSection;
