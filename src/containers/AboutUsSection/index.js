import React from "react";
import styled from "styled-components";
// import "../../App.css";

const AboutUs = styled.div`
  width: 100%;
  /* margin-top: 100px; */
  margin-bottom: 60px;
`;

const AboutUsTitle = styled.h2`
  text-align: center;
`;

const Informations = styled.div`
  display: flex;
  align-items: center;
  width: 760px;
  justify-content: space-evenly;
  margin: 50px 321px 92px 335px; /* OBS em vez de chumbar margens, 
  a boa prática é usar comandos de alinhamento para centralizar */
`;

const Image = styled.img`
  width: 383px;
  height: 257px;
`;

const Paragraph = styled.p`
  width: 370px;
  height: 234px;
`;

function AboutUsSection() {
  return (
    <AboutUs>
      <AboutUsTitle>ABOUT US</AboutUsTitle>
      <div>
        <Informations>
          <Image
            src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            esse incidunt! Reprehenderit quasi impedit sint cupiditate quas
            accusamus sunt dignissimos quod error consequatur unde ex dolor
            dolores optio vero, blanditiis maiores, nobis, autem aut odit
            praesentium temporibus? Dolorem necessitatibus hic fugit, sit omnis
            dicta, maiores dolore nobis odio veniam earum at aperiam molestias
            maxime ducimus ea vero magni. Aspernatur quam commodi aliquam ipsam
            est veritatis veniam, earum aperiam consectetur aliquid!
          </Paragraph>
        </Informations>
      </div>
    </AboutUs>
  );
}

export default AboutUsSection;
