import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";

import after1 from "../../assets/images/after01.png";

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
  background-image: url(${(props) => props.imageBackground});
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

const Paragraph = styled.p`
  margin-top: 210px;
  font-weight: bold;
  color: white;
`;

function PicturesContainer(props) {
  return (
    <>
      <PictureContainer>
        <PictureBefore imageBackground={props.imgBefore}>
          <Paragraph>Before</Paragraph>
        </PictureBefore>

        <PictureAfter imageBackground={props.imgAfter}>
          <Paragraph>After</Paragraph>
        </PictureAfter>
      </PictureContainer>
      ;
    </>
  );
}

export default PicturesContainer;
