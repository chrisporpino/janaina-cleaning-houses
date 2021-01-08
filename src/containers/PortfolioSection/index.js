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
  margin: 0 auto;
  background-color: rgba(235, 218, 8, 1) rgba(245, 223, 97, 1);
  font-family: Roboto;
`;

const PortifolioTitle = styled.title`
  color: rgba(0, 0, 0, 1);
`;

const ContainerPortifolio = styled.div`
  display: flex;
  align-items: center;
  height: 800px;
  width: 100%;
  justify-content: space-evenly;
`;

const PictureContainer = styled.div`
  display: flex;
  width: 405px;
  height: 426px;
  margin: 56px 40px 40px;
  padding: 12px;
`;

const PictureBefore = styled.div`
  width: 100%;
  margin-right: 5px;
  background-image: url(${before1});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const PictureAfter = styled.div`
  width: 100%;
  margin-right: 5px;
  background-image: url(${after1});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const PicturePortifolio = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;

// const BeforeParagraph2 = styled.p`
//   position: absolute;
//   bottom: -2480px;
//   left: 650px;
// `;

// const BeforeParagraph3 = styled.p`
//   position: absolute;
//   bottom: -2480px;
//   left: 950px;
// `;

function PortfolioSection() {
  return (
    <Portifolio>
      <PortifolioTitle>PORTFOLIO</PortifolioTitle>

      <ContainerPortifolio>
        <PictureContainer>
          <PictureBefore>
            <p>Before</p>
          </PictureBefore>
          <PictureAfter>
            <p>After</p>
          </PictureAfter>
        </PictureContainer>

        <PictureContainer>
          <PictureBefore>
            <p>Before</p>
          </PictureBefore>
          <PictureAfter>
            <p>After</p>
          </PictureAfter>
        </PictureContainer>
        <PictureContainer>
          <PictureBefore>
            <p>Before</p>
          </PictureBefore>

          <PictureAfter>
            <p>After</p>
          </PictureAfter>
        </PictureContainer>
      </ContainerPortifolio>
    </Portifolio>
  );
}

export default PortfolioSection;
