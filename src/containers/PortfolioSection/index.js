import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

const Portifolio = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const PortifolioTitle = styled.title``;

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
  background-color: teal;
`;

const PictureBefore = styled.div`
  width: 100%;
  margin-right: 5px;
`;

const PictureAfter = styled.div`
  width: 100%;
`;

const PicturePortifolio = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;

function PortfolioSection() {
  return (
    <Portifolio>
      <PortifolioTitle>PORTFOLIO</PortifolioTitle>

      <ContainerPortifolio>
        <PictureContainer>
          <PictureBefore>
            <a href="#">
              <PicturePortifolio
                src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </PictureBefore>
          <PictureAfter>
            <img
              src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </PictureAfter>
        </PictureContainer>

        <PictureContainer>
          <PictureBefore>
            <a href="#">
              <PicturePortifolio
                src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </PictureBefore>
          <PictureAfter>
            <PicturePortifolio
              src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </PictureAfter>
        </PictureContainer>
        <PictureContainer>
          <PictureBefore>
            <a href="#">
              <PicturePortifolio
                src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </PictureBefore>

          <PictureAfter>
            <PicturePortifolio
              src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </PictureAfter>
        </PictureContainer>
      </ContainerPortifolio>
    </Portifolio>
  );
}

export default PortfolioSection;
