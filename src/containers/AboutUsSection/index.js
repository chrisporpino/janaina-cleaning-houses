import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

function AboutUsSection() {
  return (
    <div id="aboutUs">
      <h3 id="aboutUs-Title">ABOUT US</h3>
      <div id="aboutUs-belt">
        <div id="aboutUs-container">
          <img
            id="AboutUs-image"
            src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
          <p id="aboutUs-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            esse incidunt! Reprehenderit quasi impedit sint cupiditate quas
            accusamus sunt dignissimos quod error consequatur unde ex dolor
            dolores optio vero, blanditiis maiores, nobis, autem aut odit
            praesentium temporibus? Dolorem necessitatibus hic fugit, sit omnis
            dicta, maiores dolore nobis odio veniam earum at aperiam molestias
            maxime ducimus ea vero magni. Aspernatur quam commodi aliquam ipsam
            est veritatis veniam, earum aperiam consectetur aliquid!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
