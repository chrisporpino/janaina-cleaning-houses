import React from "react";
import "../../assets/styles/global.css";
import styled from "styled-components";
import "../../App.css";

function PortfolioSection() {
  return (
    <div id="portifolio">
      <h2>PORTFOLIO</h2>

      <div id="container-portifolio">
        <div id="pic-container">
          <div id="pic-before">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </div>
          <div id="pic-after">
            <img
              src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>

        <div id="pic-container">
          <div id="pic-before">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </div>
          <div id="pic-after">
            <img
              src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div id="pic-container">
          <div id="pic-before">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </div>

          <div id="pic-after">
            <img
              src="https://images.unsplash.com/photo-1595940929854-47f1bca6f845?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWVzc3klMjByb29tfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;