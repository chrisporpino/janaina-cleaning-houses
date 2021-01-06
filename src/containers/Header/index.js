import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

function HeaderSection() {
  return (
    <div>
      <nav id="navbar">
        <h1>Logo</h1>
        <ul>
          <li>
            <a href="#">HOME </a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#"> TESTIMONIALS </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderSection;